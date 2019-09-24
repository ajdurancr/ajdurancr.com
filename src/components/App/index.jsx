import App from 'next/app'
import React from 'react'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default NextApp
