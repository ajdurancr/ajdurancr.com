/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default NextApp
