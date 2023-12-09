'use client' // ---> this line does the trick
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from "@chakra-ui/next-js";
import { ReactNode } from 'react'
import { theme } from './theme'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>  
  )
}

