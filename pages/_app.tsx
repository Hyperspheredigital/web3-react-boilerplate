import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { darkTheme, lightTheme } from '../src/theme';

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </Web3ReactProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
