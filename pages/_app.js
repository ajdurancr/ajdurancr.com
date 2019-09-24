/* eslint-disable */
import React from 'react'

import App from '../src/components/App'
import Router from '../src/components/Router'


const NextApp = (props) => (
  <Router {...props}>
    <App {...props} />
  </Router>
)

export default NextApp
