import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang='ru'>
        <Head>
          <meta name='description' content='Страница - портфолио. Frontend разработчик - Павел Самойленко.' />
          <meta httpEquiv='Content-type' content='text/html;charset=windows-1251' />
          <meta name='Author' content='Самойленко Павел Валерьевич' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
