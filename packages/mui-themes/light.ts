import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { Inter } from '@next/font/google';

// const inter = Inter({
//   weight: ['400', '700', '800'],
//   subsets: ['latin'],
//   fallback: ['sans-serif'],
// });

// https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#ff717b',
      main: '#ff5964',
      dark: '#e02242',
    },
    secondary: {
      light: '#ffffff',
      main: '#f5f5f5',
      dark: '#f1f1f1',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    // fontFamily: inter.style.fontFamily,
    h1: {
      // fontFamily: inter.style.fontFamily,
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    }
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
        },
      },
    },
  }
});

const lightTheme = theme;

export { lightTheme };
