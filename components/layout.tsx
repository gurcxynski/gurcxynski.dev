import Head from "next/head";
import styles from './layout.module.css'
import Navbar from "./navbar";
import { 
  Box,
  useColorModeValue, 
} from "@chakra-ui/react";
import Footer from "./footer";

export default function Layout({ children} : { children : React.ReactNode }) {
    return (
      <Box textColor={useColorModeValue('text.dark', 'text.light')} bgColor={useColorModeValue('blue.50', 'blue.800')}>
        <Head>
        <title>gurcxynski.dev</title>
        <meta name="description" content="Website-portfolio for showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/g.dev.icon.ico" />
        </Head>
        <Navbar/>
        <main>
            <Box maxW='70%' padding='0 1rem' margin = '3rem auto 6rem'>
            {children}
            </Box>
        </main>
        <Footer />
      </Box>
    )
  }