import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Портфолио frontend разработчик Павел Самойленко</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
