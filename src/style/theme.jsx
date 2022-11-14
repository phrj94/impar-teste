import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  size: {
    fullViewWidth: '100vw',
    fullViewHeight: '100vh',
    full: '100%',
  },
  colors: {
    background: '#F6F4F6',
    white: '#FFFFFF',
    orange: '#E76316',
    lightGrey: '#E4E4E4',
    text: '#263238',
    inputPlaceholder: '#757575',
    label: '#454545',
    primary: '#5F1478',
    secondary: '#AE276F',
    grey: '#757575',
    alert: '#DB2525',
  },
  border: {
    default: '1px solid #E4E4E4',
    color: {
      primary: '#E4E4E4'
    },
    radius: {
      primary: '8px',
      circle: '50%'
    },
    size: {
      small: '1px'
    },
    type: {
      solid: 'solid'
    }
  },
  fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
  fontSize: {
    xxSmall: "12px",
    xSmall: "14px",
    small: "15px",
    medium: "16px",
    large: "18px",
    xLarge: "24px",
    xxLarge: "32px",
    xxxLarge: "64px"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;