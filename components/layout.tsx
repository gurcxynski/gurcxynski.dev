import Head from "next/head";
import styles from './layout.module.css'
import Navbar from "./navbar";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, home } : {children : React.ReactNode, home? : React.ReactNode}) {
    return (
      <Box>
        <Head>
        </Head>
        <Navbar />
        <main>
            <Box className={styles.container}>
            {children}
            </Box>
        </main>
      </Box>
    )
  }