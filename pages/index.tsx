import Layout from '@/components/layout'
import Head from 'next/head'
import {Heading, Flex, Image, Spacer, Stack, Text} from '@chakra-ui/react'
import { PostData, getLipsum } from '@/lib/lipsum';
import { GetStaticProps } from 'next';
import Post from '@/components/post';

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getLipsum();
  return {
    props: {
      postData,
    },
  };
}

export default function Home({postData} : { postData : PostData }) {
  return (
    <>
      <Head>
        <title>gurcxynski.dev</title>
        <meta name="description" content="Website for personal projects showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/g.dev.icon.ico" />
      </Head>
      <main>
        <Layout>
          <Stack spacing={3}>
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
              <Text fontSize='sm'> @gurcxynski </Text>
            </Stack>
            <Post postData={postData}/>
          </Stack>
        </Layout>
      </main>
    </>
  )
}
