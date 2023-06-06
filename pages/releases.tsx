import Layout from '@/components/layout';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Image, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, HStack, Divider, Box, Stack, Spacer, useColorModeValue, Grid, GridItem, Button, ButtonGroup, Card, CardBody, CardFooter, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { parseISO, format } from 'date-fns';
import { ChevronRightIcon, LinkIcon } from '@chakra-ui/icons';

const key = '4wKha1kUw5fx5PmQ8U5DCVbhj2aNIiowf9bs33yu'

export const getServerSideProps : GetServerSideProps = async () => {
  const res = await fetch(`https://itch.io/api/1/${key}/my-games`);
  const result = await res.json() as { games : any[] }
  const gamesData = result["games"].sort((a, b) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else {
      return -1;
    }
  });
  return { props: { gamesData } };
};
 
export default function Releases({ gamesData } : { gamesData : InferGetServerSidePropsType<GetServerSideProps>}) {
  return (
    <Layout>
    <VStack spacing={8}>
      <Heading size='2xl'> Released games </Heading>
      <Text fontSize='xl'> 
      Games were created in Monogame (C#) for my Fiverr clients
      </Text>
    { gamesData.map((game : { [index : string] : string }) => {
        return (
            <Card w = '75%' key={game.id}>
              <CardBody>
                <HStack spacing='5'>
                  <Image src={game.cover_url} alt={game.title} rounded='md'/>
                  <Stack spacing='3'>
                    <Heading size='2xl' textAlign='center'> {game.title} </Heading>
                    <Text fontSize='xl'>{game.short_text}</Text>
                    <Text fontSize='md'> Released: {format(parseISO(game.published_at), 'd LLL y')} </Text>
                    <Link as={NextLink} href={game.url} w = '10vw'>
                      <Button w='100%'>
                        <Text _hover={{textDecoration:'underline'}}> itch.io page <ChevronRightIcon /> </Text> 
                      </Button>
                    </Link>
                  </Stack>
                </HStack>
              </CardBody>
            </Card>
        )})}
     </VStack>
</Layout>
)}
