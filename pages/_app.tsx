import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useContext, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return <Component {...pageProps} />
}
export default MyApp


