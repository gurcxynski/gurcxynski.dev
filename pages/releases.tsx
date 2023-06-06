import Layout from '@/components/layout';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Image, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, HStack, Divider, Box, Stack, Spacer, useColorModeValue, Grid, GridItem, Button, ButtonGroup, Card, CardBody, CardFooter } from '@chakra-ui/react'
import NextLink from 'next/link'
import { parseISO, format } from 'date-fns';

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
      <Heading> My released games </Heading>
      <Text fontSize='lg'> These are simple games I created in Monogame (C#) as Fiverr orders dobra tu bedzie jakis madry tekst kiedys napisze cos o tym pare zdan spierdalaj teraz aaaaa aaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaa aaaaaaaa</Text>
      <Grid templateColumns='repeat(3, 33%)' gap={10}>
    { gamesData.map((game : { [index : string] : string}) => {
        return (
        <GridItem key={game.id}>
            <Card maxW='sm'>
              <CardBody>
              <Image src={game.cover_url} alt={game.title} rounded='md'/>
                <Stack mt='6' spacing='3'>
                <Heading size='2xl' textAlign='center'> {game.title} </Heading>
                <Text fontSize='lg'>{game.short_text}</Text>
                <Text fontSize='md'> Released: {format(parseISO(game.published_at), 'd LLL yyyy')} </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <Button colorScheme='blue'>
                  <Link as={NextLink} href={game.url} _hover={{textDecoration: 'none'}}>{game.title} itch.io page</Link>
                  </Button>
              </CardFooter>
            </Card>
        </GridItem>
        )})}
        </Grid>
     </VStack>
</Layout>
)}
