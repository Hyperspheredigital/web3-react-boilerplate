import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import theme from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Wharf Finance</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Step 1: Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet();

  // Step 2: Retrieve styles from components in the page
  const view = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

  // Step 3: Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement();

  // Step 4: Pass styleTags as a prop
  return { ...view, styleTags };
};
