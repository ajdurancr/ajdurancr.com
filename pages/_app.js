/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import get from 'lodash.get'

import { TopMenu } from '../src/components'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { content, site } = pageProps

    return (
      <main>
        <TopMenu currentPageUrl={get(content, 'url')} menu={get(site, 'topMenu.fields')} />
        {Boolean(content) && (
          <Head>
            <title>{content.name}</title>
          </Head>
        )}
        <Component {...pageProps} />
      </main>
    )
  }
}

export default NextApp
