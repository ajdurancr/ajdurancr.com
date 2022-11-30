import React from 'react'
import classnames from 'classnames'

import styles from './Image.module.sass'

type ImageProps = {
  className?: string
  src: string
  alt: string
}
const Image: React.FC<ImageProps> = ({ className = '', src, alt }) => (
  <div className={classnames(styles.container, className)}>
    <img src={src} alt={alt} />
  </div>

)

export { Image }
