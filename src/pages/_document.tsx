import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="shortcut icon" href="/favicon.ico">
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
