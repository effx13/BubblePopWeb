import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Head from 'next/head';
import Bar from 'components/Bar';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Pretendard-Regular',
    },
  });
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <Head>
            <title>BubblePop</title>
          </Head>
          <div>
            <CssBaseline />
            <Bar />
            <Container maxWidth="sm">
              <Component {...pageProps} />
            </Container>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
