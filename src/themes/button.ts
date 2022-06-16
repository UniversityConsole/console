import {createTheme} from "@mui/material";

export const buttonTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          background: '#4F46E5',
          '&:hover': {
            background: '#655ef3',
            boxShadow: 'none',
          },
          textTransform: 'none',
          border: '1px solid #4F46E5',
          fontFamily: 'Source Sans Pro',
          boxShadow: 'none',
        },
        text: {
          color: '#4350E8',
          '&:hover': {
            background: 'transparent',
          },
          textTransform: 'none',
          fontFamily: 'Source Sans Pro',
        },
      }
    }
  }
});