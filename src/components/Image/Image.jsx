import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Image.styles.sass'

const Image = ({ className, src, alt }) => (
  <div className={classnames(styles.container, className)}>
    <img src={src} alt={alt} />
  </div>

)

Image.defaultProps = {
  className: '',
}

Image.propTypes = {
  className: propTypes.string,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
}

export default Image
