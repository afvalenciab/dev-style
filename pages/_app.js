import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from 'theme';
import useOriginCountry from 'hooks/useOriginCountry';
import { OriginCountry } from 'utils/contexts';
import Layout from 'components/Layout';

function App({ Component, pageProps }) {
  const [originCountryState, fetchOriginCountry] = useOriginCountry();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!originCountryState.data) fetchOriginCountry();
  }, []);

  return (
    <>
      <Head>
        <title>DEV-STYLE</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={1}>
          <OriginCountry.Provider value={originCountryState}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </OriginCountry.Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
