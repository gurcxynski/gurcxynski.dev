import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ target, children }: { target : string, children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${target}`}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box width='6vw'>
              <Link href="/">
              <Image src={`/images/gurcxynskidev-low-resolution-logo-${colorMode === 'light' ? 'black' : 'white'}-on-transparent-background.png`} alt="logo" />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} target={link.toLowerCase()}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <ColorModeToggle/>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}