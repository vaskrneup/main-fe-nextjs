import '../styles/globals.scss';
import '../styles/components/button.scss';
import type { AppProps } from 'next/app';
import Layout from "../components/Layout";
import '@fortawesome/fontawesome-free/css/all.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout setMinHeightOfScreen={true}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;