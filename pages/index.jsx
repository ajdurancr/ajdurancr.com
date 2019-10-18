/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */

import React from 'react'
import propTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import get from 'lodash.get'
import Router from '../src/components/Router'
import routes from '../routes'

const App = ({ pageData, ...props }) => (
  <Router {...props}>
    <Switch>
      {routes.map(({ path, exact, component: Page }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(pageProps) => <Page {...pageProps} pageData={pageData} />}
        />
      ))}
    </Switch>
  </Router>
)

const pageDataLoader = (inputRoutes) => {
  const pageLoadersMap = inputRoutes.reduce((loadersMap, { path, component }) => {
    const dataLoader = get(component, 'dataLoader')
    if (!path || !dataLoader) return loadersMap

    return { ...loadersMap, [path]: dataLoader }
  }, {})

  return (nextContext) => {
    const { [nextContext.req.path]: dataLoader } = pageLoadersMap

    if (!dataLoader) return { pageData: {} }

    return dataLoader(nextContext)
  }
}

App.propTypes = { pageData: propTypes.object }
App.defaultProps = { pageData: {} }

App.getInitialProps = pageDataLoader(routes)

export default App
