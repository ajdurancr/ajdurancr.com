import React from 'react'
import { StaticRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const isServer = typeof window === 'undefined'

const Router = ({ context, location, children }) => {
  const AppRouter = isServer ? StaticRouter : BrowserRouter

  return (
    <AppRouter location={location} context={context}>
      {children}
    </AppRouter>
  )
}

export default Router
