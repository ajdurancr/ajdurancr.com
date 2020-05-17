import React from 'react'
import Cookies from 'cookie-universal'

import { Page } from '../src/components'
import themes from '../src/constants/appTheme'
import { APP_THEME_COOKIE_NAME } from '../src/constants/cookies'

const NextPage = (props) => <Page {...props} />

NextPage.getInitialProps = async ({ query, req, res }) => {
  const cookies = Cookies(req, res)
  const { [APP_THEME_COOKIE_NAME]: appTheme = themes.DEFAULT } = cookies.getAll()

  return { ...query, appTheme }
}

export default NextPage
