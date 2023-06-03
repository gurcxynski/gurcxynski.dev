import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export const theme = extendTheme()

export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider>
  <Component {...pageProps} />
</ChakraProvider>)}
