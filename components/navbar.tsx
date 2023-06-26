import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';
import NextLink from 'next/link'

const Links : { text : string, link? : string}[] = [{text : 'Home', link:'/'}, {text : 'Releases'}, {text : 'Projects'} ] 

const NavLink = ({ target, children }: { target? : string, children: ReactNode }) => (
  <Link as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.100', 'blue.850'),
    }}
    href={`${target ? target : "/" + children?.toString().toLowerCase()}`}
    fontSize='lg'
    fontWeight='semibold'>
    {children}
  </Link>
);

export default function Navbar() {
  return (
      <Box bg={useColorModeValue('blue.200', 'blue.900')} px={4} position='sticky' top='0' w = '100%' zIndex={1000}>
        <Flex h='10%' alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={10} alignItems={'center'}>
            <Box width='7vw'>
              <Link as={NextLink} href="/">
              <Image src={`/images/gurcxynskidev-low-resolution-logo-${useColorModeValue('black', 'white')}-on-transparent-background.png`} alt="logo" />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(({text, link}) => (
                <NavLink key={text} target={link}>{text}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Heading size='lg'> <Link as={NextLink} href="/" _hover={{textDecoration:'none'}}></Link> </Heading>
          <ColorModeToggle/>
        </Flex>
      </Box>
  );
}