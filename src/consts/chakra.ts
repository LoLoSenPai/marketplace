import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const colors = {
  light: {
    bg: "#ffffff",
    text: "#000000",
    cardBg: "rgba(205, 206, 207, 0.7)",
    cardText: "#4a4a4a",
    hoverBg: "rgba(210, 210, 210, 0.4)",
    linkActive: "#a0a0a0",
  },
  dark: {
    bg: "#121212",
    text: "#FFFFFF",
    cardBg: "rgba(58, 58, 58, 0.7)",
    cardText: "#b9b9b9",
    hoverBg: "rgba(217, 217, 217, 0.1)",
    linkActive: "#545454",
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === "dark" ? colors.dark.bg : colors.light.bg,
      color: props.colorMode === "dark" ? colors.dark.text : colors.light.text,
    },
    ".card": {
      bg: props.colorMode === "dark" ? colors.dark.cardBg : colors.light.cardBg,
    },
    ".hover-bg:hover": {
      backgroundColor: props.colorMode === "dark" ? colors.dark.hoverBg : colors.light.hoverBg,
      transition: "background-color 0.3s ease",
    },
    ".link-active": {
      backgroundColor: props.colorMode === "dark" ? colors.dark.linkActive : colors.light.linkActive,
      transition: "background-color 0.3s ease",
    },
    ".text-card-text": {
      color: props.colorMode === "dark" ? colors.dark.cardText : colors.light.cardText,
    },
  }),
};

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const chakraTheme = extendTheme({
  config: chakraThemeConfig,
  styles,
  colors,
  fonts,
});
