import React from 'react'
import propTypes from 'prop-types'

import { Section } from '..'
import styles from './Page.styles.sass'

const Page = ({ name, sections }) => (
  <>
    {Boolean(name) && <h1 className={styles.title}>{name}</h1>}
    {sections && sections.map(({ sys, fields }) => (
      <Section key={sys.id} {...fields} />
    ))}
  </>
)

Page.defaultProps = {
  site: {},
  sections: [],
}

Page.propTypes = {
  sections: propTypes.arrayOf(propTypes.object),
  name: propTypes.string.isRequired,
  site: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }),
}

export default Page
