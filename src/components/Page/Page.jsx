import React from 'react'
import propTypes from 'prop-types'

import { Section } from '..'
import styles from './Page.styles.sass'

const Page = ({ sections }) => (
  <div className={styles.container}>
    {sections && sections.map(({ sys, fields }) => (
      <Section key={sys.id} {...fields} />
    ))}
  </div>
)

Page.defaultProps = {
  site: {},
  sections: [],
}

Page.propTypes = {
  sections: propTypes.arrayOf(propTypes.object),
  site: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }),
}

export default Page
