import React from 'react'
import propTypes from 'prop-types'

import styles from './PageContent.styles.sass'

const PageContent = ({ content }) => (
  <>
    {Boolean(content.name) && <h1 className={styles.title}>{content.name}</h1>}
  </>
)

PageContent.defaultProps = {
  content: {},
  site: {},
}

PageContent.propTypes = {
  content: propTypes.shape({
    sections: propTypes.arrayOf(propTypes.object),
    name: propTypes.string,
    url: propTypes.string,
  }),
  site: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }),
}

export default PageContent
