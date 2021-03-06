import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/media/img/favicon.ico" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
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
