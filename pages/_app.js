/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { content } = pageProps

    return (
      <main>
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
