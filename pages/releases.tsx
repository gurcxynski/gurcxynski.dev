import Layout from '@/components/layout';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Image, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, HStack, Divider, Box, Stack, Spacer, useColorModeValue } from '@chakra-ui/react'
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
      <Heading> Games from <Link href='https://gurcxynski.itch.io'>my itch.io page</Link> </Heading>
      <Text> These are simple games I created in Monogame (C#) as Fiverr orders dobra tu bedzie jakis madry tekst kiedys napisze cos o tym pare zdan spierdalaj teraz aaaaa aaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaa aaaaaaaa</Text>
    { gamesData.map((game : { [index : string] : string}) => {
        return (<Stack key={game.id}>
        <Divider/>
        <Link as={NextLink} href={game.url} _hover={{textDecoration: 'none'}}><Heading> {game.title} </Heading></Link>
        <Text fontSize='md'> Released: {format(parseISO(game.published_at), 'd LLL yyyy')} </Text>
        <HStack spacing={4} justify='left'>
          <Image src={game.cover_url} alt={game.title} rounded='md'/>
          <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dolor ut diam hendrerit vehicula. Suspendisse hendrerit euismod tempor. Proin suscipit neque sit amet tristique bibendum. Nunc porta ante eget aliquam luctus. Quisque a augue consectetur, ullamcorper dui non, condimentum eros. Fusce vehicula dignissim erat, eu blandit velit rutrum at. Pellentesque ante tortor, pharetra nec congue ac, pellentesque ut sapien. Etiam vitae nibh posuere, gravida lectus sit amet, sagittis tellus. Donec eu neque ac metus venenatis tristique vulputate non libero. Sed sed laoreet turpis. </Text>
        </HStack>
        </Stack>
        )})}
     </VStack>
</Layout>
)}