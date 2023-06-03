import { PhoneIcon } from '@chakra-ui/icons';
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
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    const { colorMode } = useColorMode();
    return (
      <HStack>
          <Heading as='h5' size='sm'>Wojciech Górczyński</Heading>
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
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>My projects</ListHeader>
              <Link href={'https://github.com/gurcxynski?tab=repositories'}><Text as='b'>Github</Text> repositories</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'https://www.fiverr.com/gurcxynski'}><Text as='b'>Fiverr</Text> page</Link>
              </Stack>
              <Link href={'https://gurcxynski.itch.io'}>Releases on <Text as='b'>itch.io</Text></Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'/about-me'}>About Me</Link>
              <Link href={'#'}>Contact Me</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Me</ListHeader>
              <Link href={'https://www.facebook.com/gurcxynski/'}>Facebook</Link>
              <Link href={'https://github.com/gurcxynski'}>Github</Link>
              <Link href={'https://www.linkedin.com/in/wojciech-górczyński-979442232/'}>LinkedIn</Link>
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
            © 2023 Wojciech Górczyński. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }