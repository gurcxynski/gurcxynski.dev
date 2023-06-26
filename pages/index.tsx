import Layout from '@/components/layout'
import { ChevronRightIcon } from '@chakra-ui/icons';
import {Heading, Flex, Image, Spacer, Stack, Text, Button, Divider, HStack, Link, Card, CardBody, CardFooter, SimpleGrid, VStack} from '@chakra-ui/react'
import { format, parseISO } from 'date-fns';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import NextLink from 'next/link';

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
 
function Present({ data } : { data : InferGetServerSidePropsType<GetServerSideProps>}) {
  return (
      <SimpleGrid minChildWidth='350px' spacingX='2vw' spacingY='2vw'>
        { data.map((game : { [index : string] : string }) => {
            return (
                <Card key={game.id}>
                  <CardBody>
                    <VStack spacing='3'>
                      <Image src={game.cover_url} alt={game.title} rounded='md'/>
                        <Heading size='2xl' textAlign='center'> {game.title} </Heading>
                        <Text fontSize='md'> Released: {format(parseISO(game.published_at), 'd LLL y')} </Text>
                        <Text fontSize='xl'>{game.short_text}</Text>
                    </VStack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Link as={NextLink} href={game.url}>
                        <Button variant='solid' colorScheme='blue'>
                          itch.io page <ChevronRightIcon />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
            )})}
        </SimpleGrid>
)}




export default function Home({ gamesData } : { gamesData : InferGetServerSidePropsType<GetServerSideProps>}) {
  return (
        <Layout>
          <Stack spacing={9}>
            <Flex>
              <Spacer/>
              <Image borderRadius='full'
                boxSize='200px'
                src="/images/profile.jpg"
                alt="profile-picture"/>
              <Spacer/>
            </Flex>
            <Stack spacing={2}>
              <Heading size='2xl'> Wojciech Górczyński </Heading>
              <Text fontSize='md'> @gurcxynski </Text>
            </Stack>
            <Stack>
              <Text fontSize='xl'>
              I&apos;m a young, ambitious student of software engineering, wanting to become a software developer. I create games and other simple programs for practice or as <Link href='https://fiverr.com/gurcxynski'> Fiverr orders</Link>. These are games I created and released on <Link href='https://gurcxynski.itch.io'>my itch.io page</Link>:
              </Text>
            </Stack>
            <Divider />
            <Present data={gamesData}/>
          </Stack>
        </Layout>
  )
}
