import {ThemeOptions} from "@mui/material/styles";

export const buttonTheme: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          background: 'rgb(79,70,229)',
          '&:hover': {
            background: 'rgb(67, 56, 202)',
            boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.05)',
          },
          textTransform: 'none',
          boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.05)',
        },
        text: {
          color: '#444',
          '&:hover': {
            background: 'transparent',
          },
          fontSize: '16px',
          textTransform: 'none',
          padding: 0,
        },
      },
    },
  },
};