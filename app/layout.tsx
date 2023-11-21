"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, useColorModeValue } from "@chakra-ui/react";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  gray: {
    50: "#f9f9f9",
    100: "#ededed",
    200: "#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500: "#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900: "#111",
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Container
              minW={"100%"}
              minH={"100%"}
              p={"20px 200px 100px 200px"}
            >
              <NavBar />
              {children}
              <Footer />
            </Container>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
