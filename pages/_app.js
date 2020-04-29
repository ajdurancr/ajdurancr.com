import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import get from 'lodash.get'

import { Header, SEO } from '../src/components'

import '../src/styles/_main.sass'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { pageUrl, seo, site } = pageProps

    return (
      <main>
        <Head>
          <link rel="shortcut icon" href="/images/logo/icon.svg" />
        </Head>
        <SEO {...get(seo, 'fields')} siteName={get(site, 'name', 'ajdurancr.com')} />
        <Header pageUrl={pageUrl} {...get(site, 'header.fields')} />
        <Component {...pageProps} />
      </main>
    )
  }
}

export default NextApp
