import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale;
    let lang;
    if (locale) {
      [lang] = locale.split('-')
    }
    return (
      <Html dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument