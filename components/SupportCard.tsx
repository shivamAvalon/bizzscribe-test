import React from "react";
import {
  Stack,
  Heading,
  Button,
  Avatar,
  useColorModeValue,
  HStack,
  Text
} from "@chakra-ui/react";

export default function SupportCard() {
  
  const btnBg = useColorModeValue('gray.700', 'gray.100');
  const btnTxt = useColorModeValue('gray.100', 'gray.700');

  return (
    <Stack
      position="absolute"
      right="0"
      zIndex="2"
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      p={5}
      
      boxShadow={"2xl"}
    >
      <HStack spacing={2}>
        <Avatar
          size={"lg"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 2,
            h: 2,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 2,
          }}
        />
        <Text fontSize={"small"}>Fafis from support</Text>
      </HStack>
      <Stack spacing={4} direction={{ base: "column", md: "row" }}>
        <Button
          bg={btnBg}
          rounded={"full"}
          color={btnTxt}
          flex={"1 0 auto"}
        >
          Chat us on Whatsapp
        </Button>
      </Stack>
    </Stack>
  );
}
