import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {Box, Image} from '@chakra-ui/react'
import styles from '../components/layout.module.css';
import { Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
      <Box boxSize='sm'>
        <Image borderRadius='full'
        boxSize='200px'
        src="/images/profile1.jpg"
        alt="profile-picture"/>
      </Box>
      </header>
      <div className={utilStyles.headingMd}>
        Tutaj super interesujacy opis projektow
      </div>
      <Button colorScheme="darkgray"> PRESS ME </Button>
    </Layout>
  )
}
