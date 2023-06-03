import Layout from '@/components/layout'
import Head from 'next/head'
import {Heading, Flex, Image, Spacer, Stack, Text} from '@chakra-ui/react'
export default function Home() {
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
          </Stack>
        </Layout>
      </main>
    </>
  )
}
