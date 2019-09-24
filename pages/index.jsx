import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../routes'

const App = (props) => (
  <Switch>
    {routes.map(({ path, exact, component }) => (
      <Route key={console.log('path', path) || path} path={path} exact={exact} component={component} componentProps={props} />
    ))}
  </Switch>
)

export default App
