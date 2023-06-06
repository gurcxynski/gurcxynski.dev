import Layout from "@/components/layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Button, Card, CardBody, CardHeader, Grid, GridItem, Heading, Link, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const getStaticProps : GetStaticProps = async () => {
    try {
    const res = await fetch(`https://api.github.com/users/gurcxynski/repos`);
    const result = await res.json() as any[] 
    const reposData = result.sort((a, b) => {
      if (a.created_at < b.created_at) {
        return 1;
      } else {
        return -1;
      }
    });
    var readmes : { [key : string] : string } = {}
    reposData.map(async (repo) => {
        const prom = await fetch(`https://api.github.com/repos/gurcxynski/${repo.name}/readme`)
        const readme = await prom.json()
        const text = readme.content.toString('base64')
        readmes[repo.name] = text
    })
    return { props: { reposData, readmes} }}
    catch {}
    return { props : {}}
}
 
export default function Projects( { reposData, readmes } : InferGetStaticPropsType<GetStaticProps>){
    if (reposData === undefined){
        return(
            <Layout>
                <VStack>
                    <Text> Github API connection limit reached, try again later </Text>
                </VStack>
            </Layout>
        )
    }
    return(
        <Layout>
            <Grid templateColumns='repeat(3, 33%)' gap={6}>
            {reposData.map((repo : {[index : string] : any}) => {
                return (
                    <GridItem key={repo.id}>
                        <Card h = '100%'>
                            <CardHeader>
                              <Heading size='md'>{repo.name}</Heading>
                            </CardHeader>
                            <CardBody>
                              <Stack divider={<StackDivider />} spacing='4'>
                                <Box>
                                  <Heading size='xs' textTransform='uppercase'>
                                    Description
                                  </Heading>
                                  <Text pt='2' fontSize='sm'>
                                    {repo.description}
                                  </Text>
                                </Box>
                                <Box>
                                  <Heading size='xs' textTransform='uppercase'>
                                    Created
                                  </Heading>
                                  <Text pt='2' fontSize='sm'>
                                    {format(parseISO(repo.created_at), 'd/LL/y')}
                                  </Text>
                                </Box>
                                <Box>
                                  <Heading size='xs' textTransform='uppercase'>
                                    Language
                                  </Heading>
                                  <Text pt='2' fontSize='sm'>
                                    {repo.language}
                                  </Text>
                                </Box>
                                <Box>
                                  <Heading size='xs' textTransform='uppercase'>
                                    Details
                                  </Heading>
                                  <Text pt='2' fontSize='sm'>
                                    {readmes[repo.name]}
                                  </Text>
                                </Box>
                                <Button> <Link as={NextLink} href={repo.html_url}> Github page </Link></Button>
                              </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                )
            })}
            </Grid>
        </Layout>
    )
}