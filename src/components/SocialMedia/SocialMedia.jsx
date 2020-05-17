import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Component } from '..'
import styles from './SocialMedia.module.sass'

const SocialMedia = ({ socialMediaLinks }) => (
  <div className={styles.container}>
    {socialMediaLinks.map((component) => (
      <Component key={get(component, 'sys.id')} {...component} />
    ))}
  </div>
)

SocialMedia.defaultProps = {
  socialMediaLinks: [],
}

SocialMedia.propTypes = {
  socialMediaLinks: propTypes.arrayOf(propTypes.object),
}

export default SocialMedia
