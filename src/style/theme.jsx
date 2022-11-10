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
    secondary: '#AE276F',
    grey: '#757575',
    alert: '#DB2525',
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
  },
  borderDefault: '1px solid #E4E4E4'
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;