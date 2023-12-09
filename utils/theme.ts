// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

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
export const theme = extendTheme({ config, fonts, colors });


