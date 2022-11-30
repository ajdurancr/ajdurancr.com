import React from 'react'
import classnames from 'classnames'
import get from 'lodash.get'

import styles from './Hero.module.sass'
import { CfMedia } from '../../types/contentful'

type HeroPros = {
  className?: string
  image?: CfMedia
};

const Hero: React.FC<HeroPros> = ({ className = '', image }) => (
  <div className={classnames(styles.container, className)}>
    <div
      className={classnames(styles.imageContainer)}
      style={{ backgroundImage: `url(${get(image, 'fields.file.url')})` }}
    />
  </div>
)

export { Hero }
