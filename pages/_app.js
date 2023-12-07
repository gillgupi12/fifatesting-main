import { AnimatePresence } from 'framer-motion';
import App from 'next/app';
import router from 'next/router';
import Layout from '../layout/layout';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <AnimatePresence
            mode="wait"
            initial="false"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </>
    );
  }
}

export default MyApp;
