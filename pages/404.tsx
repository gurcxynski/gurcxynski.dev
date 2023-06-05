import Layout from "@/components/layout";
import NextLink from 'next/link'
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';

function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you{"'"}re looking for does not seem to exist
      </Text>
      <Link as={NextLink} href="/">
      <Button
        color="white"
        variant="solid">
        Go to Home
      </Button>
      </Link>
    </Box>
  );
}

export default function Custom404(){
    return(
        <Layout>
            <NotFound />
        </Layout>
    )
}