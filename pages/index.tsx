import Layout from '@/components/layout'
import {Heading, Flex, Image, Spacer, Stack, Text, Button, Divider, HStack, Link} from '@chakra-ui/react'
import NextLink from 'next/link';

export default function Home() {
  return (
        <Layout>
          <Stack spacing={5}>
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
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </Stack>
            <Divider />
            <HStack>
            <Link as={NextLink} href={'/releases'}> <Button> My released games </Button> </Link>
            <Link as={NextLink} href={'/projects'}> <Button> All Github projects </Button> </Link>
            </HStack>
          </Stack>
        </Layout>
  )
}
