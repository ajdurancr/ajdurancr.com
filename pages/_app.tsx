import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import classnames from 'classnames'
import Cookies from 'cookie-universal'
import get from 'lodash.get'

import { themeOptions } from '../constants/appTheme'
import AppThemeContext from '../context/appThemeContext'
import { Header } from '../components/Header'
import { SEO } from '../components/SEO'
import { APP_THEME_COOKIE_NAME, APP_THEME_MAX_AGE } from '../constants/cookies'

import '../styles/_main.sass'
import { PageProps } from '../components/Page/Page'

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const cookies = Cookies();
  const appThemeCookie = get(cookies.getAll(), APP_THEME_COOKIE_NAME)
  const [appTheme, setAppTheme] = useState(themeOptions.DEFAULT)

  useEffect(() => {
    if(appThemeCookie === appTheme) return

    const newTheme = appThemeCookie || themeOptions.DEFAULT

    setAppTheme(newTheme);
    cookies.set('appTheme', newTheme, { maxAge: APP_THEME_MAX_AGE, path: '/' })
  }, [appTheme, appThemeCookie, cookies])
  
    const { name: pageName, pageUrl, seo, site } = pageProps
    const useTheme = appTheme && appTheme !== themeOptions.DEFAULT

    return (
      <main className={classnames('theme-default', { [`theme-${appTheme}`]: useTheme })}>
        <AppThemeContext.Provider value={appTheme}>
          <Head>
            <link rel="shortcut icon" href="/images/logo/icon.svg" />
          </Head>
          {seo && <SEO title={seo?.title || pageName} siteName={site?.name} />}
          {site?.header && <Header
            pageUrl={pageUrl}
            menu={site.header.fields.menu}
            socialMedia={site.header.fields.socialMedia}
          />}
          <Component {...pageProps} />
        </AppThemeContext.Provider>
      </main>
    )
}
