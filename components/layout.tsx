import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import Contact from './contact-me'
import { Button, useColorMode } from '@chakra-ui/react'

export const siteTitle = 'gurcxynski.dev'

export default function Layout({ children, home } : {children : React.ReactNode, home? : React.ReactNode}) {
  const { toggleColorMode } = useColorMode()
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/g.dev.icon.ico" />
        <meta
          name="description"
          content="A personal website for project showcasing"
        />
        
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <Button onClick={toggleColorMode}> dark mode </Button>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
          
        </div>
      )}
      <Contact />
    </div>
  )
}