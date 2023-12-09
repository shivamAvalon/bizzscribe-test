import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Image,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const btnBg = useColorModeValue("gray.700", "gray.100");
  const btnTxt = useColorModeValue("gray.100", "gray.700");

  const onHoverbtnBg = useColorModeValue("gray.900", "gray.200");


  return (
    <>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link href="/">
          <Image
            borderRadius="8px"
            w="68px"
            h="45px"
            backgroundSize={"cover"}
            src="/bizzscribeLogo.png"
            alt="Logo"
          />
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link href={"/registration"}>
              <Button bg={btnBg} color={btnTxt} _hover={{ bg: onHoverbtnBg }}>
                Get Started
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button bg={btnBg} color={btnTxt}
              _hover={{ bg: onHoverbtnBg }}>
                Login
              </Button>
            </Link>
            <Button bg={btnBg} color={btnTxt}  _hover={{ bg: onHoverbtnBg }} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
