import Layout from '@/components/layout'
import {Heading, Flex, Image, Spacer, Stack, Text} from '@chakra-ui/react'

export default function Home() {
  return (
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
  )
}
