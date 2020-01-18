import React from 'react'
import propTypes from 'prop-types'

import { PageContent } from '../src/components'

const GenericPage = ({ content }) => <PageContent content={content} />

GenericPage.getInitialProps = async ({ query }) => ({ ...query })

GenericPage.propTypes = {
  content: propTypes.shape({
    content: propTypes.object,
    site: propTypes.object,
  }),
}

GenericPage.defaultProps = {
  content: {},
}

export default GenericPage
