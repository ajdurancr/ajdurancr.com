import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import classnames from 'classnames'
import get from 'lodash.get'
import Cookies from 'cookie-universal'

import { Header, SEO } from '../src/components'
import AppThemeContext from '../src/context/appThemeContext'
import appTheme from '../src/constants/appTheme'
import { APP_THEME_MAX_AGE } from '../src/constants/cookies'

import '../src/styles/_main.sass'

class NextApp extends App {
  componentDidMount() {
    const cookies = new Cookies()

    cookies.set('appTheme', get(this.props, 'pageProps.appTheme'), { maxAge: APP_THEME_MAX_AGE })
  }

  render() {
    const { Component, pageProps } = this.props
    const {
      pageUrl, seo, site, appTheme: appThemeProp,
    } = pageProps
    const useTheme = appThemeProp && appThemeProp !== appTheme.DEFAULT

    return (
      <main className={classnames('theme-default', { [`theme-${appThemeProp}`]: useTheme })}>
        <AppThemeContext.Provider value={appThemeProp}>
          <Head>
            <link rel="shortcut icon" href="/images/logo/icon.svg" />
          </Head>
          <SEO {...get(seo, 'fields')} siteName={get(site, 'name', 'ajdurancr.com')} />
          <Header pageUrl={pageUrl} {...get(site, 'header.fields')} />
          <Component {...pageProps} />
        </AppThemeContext.Provider>
      </main>
    )
  }
}

export default NextApp
