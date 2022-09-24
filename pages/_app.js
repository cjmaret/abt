import { Router } from 'next/router';
import { useEffect } from 'react';
import Page from '../components/Page';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  });

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
