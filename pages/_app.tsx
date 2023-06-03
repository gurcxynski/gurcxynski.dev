import '../styles/global.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>)
}
