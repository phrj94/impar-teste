import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: '#F6F4F6',
    white: '#FFFFFF',
    orange: '#E76316',
    border: '#E4E4E4',
    text: '#263238',
    label: '#454545',
    primary: '#5F1478',
    grey: '#757575',
    alert: '#DB2525',
    gradient: {
        primary: '#AE276F',
        secondary: '#5F1478'
    }
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    xxSmall: "12",
    xSmall: "14",
    small: "15",
    medium: "16",
    large: "18",
    xLarge: "24",
    xxLarge: "32",
    xxxLarge: "64"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;