import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
