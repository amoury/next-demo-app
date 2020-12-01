import Document, { Html, Head, Main, NextScript } from 'next/document'
import { withTranslation, i18n } from '../i18n'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    console.log(this.props.__NEXT_DATA__.props.pageProps);
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;