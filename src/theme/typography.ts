import {ThemeOptions} from "@mui/material/styles";

export const typographyTheme: ThemeOptions = {
  typography: {
    fontFamily: [
      'Inter',
      'Source Sans Pro',
      'Roboto',
      'Helvetica',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-0.75px',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 800,
      margin: '15px 0 15px 0'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
};