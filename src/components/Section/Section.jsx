import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Component } from '..'

const Section = ({ components }) => (
  <>
    {components && components.map((component) => (
      <Component key={get(component, 'sys.id')} {...component} />
    ))}
  </>
)

Section.defaultProps = {
  components: [],
}

Section.propTypes = {
  components: propTypes.arrayOf(propTypes.object),
}

export default Section
