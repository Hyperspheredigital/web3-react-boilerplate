import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import theme from '../styles/theme';
import Toolbar from '../components/Toolbar/Toolbar';

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst={true}>
        <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Toolbar></Toolbar>
            <Component {...pageProps} />
          </Web3ReactProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
