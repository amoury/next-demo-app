import App from 'next/app';
import { appWithTranslation } from '../i18n'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default appWithTranslation(MyApp);
