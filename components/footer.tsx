import NextLink from 'next/link'
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
    Heading,
    useColorMode,
    HStack,
    Divider,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = () => {
    const { colorMode } = useColorMode();
    return (
      <HStack>
          <Box width='6vw'>
          <Image src={`/images/gurcxynskidev-low-resolution-logo-${colorMode === 'light' ? 'black' : 'white'}-on-transparent-background.png`} alt='bottom-logo'/>
          </Box>
        </HStack>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box textColor={useColorModeValue('text.dark', 'text.light')} bgColor={useColorModeValue('blue.200', 'blue.700')}>
      <Divider />
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Projects</ListHeader>
              <Link as={NextLink} href={'https://github.com/gurcxynski?tab=repositories'}><Text as='b'>Github</Text> repositories</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link as={NextLink} href={'https://www.fiverr.com/gurcxynski'}><Text as='b'>Fiverr</Text> page</Link>
              </Stack>
              <Link as={NextLink} href={'https://gurcxynski.itch.io'}>Releases on <Text as='b'>itch.io</Text></Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow me</ListHeader>
              <Link as={NextLink} href={'https://www.facebook.com/gurcxynski/'}>Facebook</Link>
              <Link as={NextLink} href={'https://github.com/gurcxynski'}>Github</Link>
              <Link as={NextLink} href={'https://www.linkedin.com/in/wojciech-górczyński-979442232/'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2023 Wojciech Górczyński
          </Text>
        </Box>
      </Box>
    );
  }