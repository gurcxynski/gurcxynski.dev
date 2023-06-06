import colors from '@/lib/theme'
import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export const theme = extendTheme({
  config : {
    initialColorMode : 'system',
  },
  colors : colors
})

export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider theme={theme} >
  <Component {...pageProps} />
</ChakraProvider>)}
