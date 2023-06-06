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

const Links : { text : string, link? : string}[] = [{text : 'Home', link:'/'}, {text : 'Releases'}, {text : 'Projects'}, {text : 'About me'}, ] 

const NavLink = ({ target, children }: { target? : string, children: ReactNode }) => (
  <Link as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.100', 'blue.500'),
    }}
    href={`${target ? target : "/" + children?.toString().toLowerCase().replace(" ", "-")}`}>
    {children}
  </Link>
);

export default function Navbar() {
  return (
      <Box bg={useColorModeValue('blue.200', 'blue.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box width='6vw'>
              <Link as={NextLink} href="/">
              <Image src={`/images/gurcxynskidev-low-resolution-logo-${useColorModeValue('black', 'white')}-on-transparent-background.png`} alt="logo" />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(({text, link}) => (
                <NavLink key={text} target={link}>{text}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Heading size='lg'> gurcxynski.dev </Heading>
          <ColorModeToggle/>
        </Flex>
      </Box>
  );
}