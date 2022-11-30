import type { NextPage as NextPageType } from 'next'
import React from 'react'
import Cookies from 'cookie-universal'

import { themeOptions } from '../constants/appTheme'
import { APP_THEME_COOKIE_NAME } from '../constants/cookies'
import type { PageProps } from '../components/Page/Page'
import { Page } from '../components/Page'

const NextPage: NextPageType<PageProps> = (props) => <Page {...props} />

NextPage.getInitialProps = async ({ query, req, res }) => {
  const cookies = Cookies(req, res)
  const {
    [APP_THEME_COOKIE_NAME]: appTheme = themeOptions.DEFAULT
  } = cookies.getAll() as { [cookieName: string]: string }

  return { ...query, appTheme } as PageProps
}

export default NextPage
