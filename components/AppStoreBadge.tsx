'use client'

import { FaFacebook } from 'react-icons/fa'
import { IoLogoAppleAppstore } from "react-icons/io5";

import { Button, Center, Text } from '@chakra-ui/react'

export default function AppStoreBadge() {
  return (
      <Button w={'full'} maxW={'md'} colorScheme={'facebook'} leftIcon={<IoLogoAppleAppstore />}>
        <Center>
          <Text>Download on App Store</Text>
        </Center>
      </Button>
  )
}