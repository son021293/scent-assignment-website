import { Roboto, Roboto_Condensed } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: red[800]
    }
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          letterSpacing: "1.1px",
          ...(ownerState.variant === 'outlined' && {
            borderColor: red[800],
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          // letterSpacing: "1px"
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
