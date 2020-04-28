/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import get from 'lodash.get'

import { Header } from '../src/components'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { name, site, url } = pageProps

    return (
      <main>
        <Header currentPageUrl={url} menu={get(site, 'menu')} />
        {Boolean(name) && (
          <Head>
            <title>{name}</title>
          </Head>
        )}
        <Component {...pageProps} />
      </main>
    )
  }
}

export default NextApp
