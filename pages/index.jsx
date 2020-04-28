import React from 'react'
import propTypes from 'prop-types'

import { Page } from '../src/components'

const NextPage = (props) => <Page {...props} />

NextPage.getInitialProps = async ({ query }) => ({ ...query })

NextPage.propTypes = {
  sections: propTypes.arrayOf(propTypes.object),
  site: propTypes.object,
}

NextPage.defaultProps = {
  sections: [],
  site: {},
}

export default NextPage
