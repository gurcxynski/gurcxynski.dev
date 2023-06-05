import Layout from '@/components/layout';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Image, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

const key = '4wKha1kUw5fx5PmQ8U5DCVbhj2aNIiowf9bs33yu'

export const getServerSideProps : GetServerSideProps = async () => {
  const res = await fetch(`https://itch.io/api/1/${key}/my-games`);
  const result = await res.json();
  return { props: { result } };
};
 
export default function Releases({ result } : { result : InferGetServerSidePropsType<GetServerSideProps>}) {
  return (
    <Layout>
<Tabs>
  <TabList>
  {result["games"].map((game : { id : string, [index : string] : string}) => {
        return (
            <Tab key={game.id}> {game.title} </Tab>
        )
    })}
  </TabList>

  <TabPanels>=
    {result["games"].map((game : { id : string, [index : string] : string}) => {
        return (
            <TabPanel key={game.id}>
                <Link as={NextLink} href={game.url}><Heading> {game.title} </Heading></Link>
                <Text> Released: {new Date(game.published_at).toLocaleDateString()} </Text>
                <Image src={game.cover_url} alt={game.title}/>
            </TabPanel>
        )
    })}
  </TabPanels>
</Tabs>
</Layout>
)}