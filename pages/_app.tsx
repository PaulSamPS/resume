import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:locale' content='ru_RU' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
