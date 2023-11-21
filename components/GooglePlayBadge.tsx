'use client'

import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa6";


import { Button, Center, Text } from '@chakra-ui/react'

export default function GooglePlayBadge() {
  return (
      <Button w={'full'} maxW={'md'} colorScheme={'gray'} leftIcon={<FaGooglePlay />}>
        <Center>
          <Text>Get it on Google Play</Text>
        </Center>
      </Button>
  )
}