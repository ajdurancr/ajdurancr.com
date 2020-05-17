import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import get from 'lodash.get'

import styles from './Hero.module.sass'

const Hero = ({ className, image }) => (
  <div className={classnames(styles.container, className)}>
    <div
      className={classnames(styles.imageContainer)}
      style={{ backgroundImage: `url(${get(image, 'fields.file.url')})` }}
    />
  </div>
)

Hero.defaultProps = {
  className: '',
}

Hero.propTypes = {
  className: propTypes.string,
  image: propTypes.object.isRequired,
}

export default Hero
