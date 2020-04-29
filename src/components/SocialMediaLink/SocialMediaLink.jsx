import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Image } from '..'
import styles from './SocialMediaLink.styles.sass'

const SocialMediaLink = ({ cta, icon }) => cta && icon && (
  <a href={get(cta, 'link')} className={styles.link}>
    <Image
      src={get(icon, 'fields.file.url')}
      alt={get(cta, 'text')}
    />
  </a>
)

SocialMediaLink.propTypes = {
  icon: propTypes.object.isRequired,
  cta: propTypes.shape({
    link: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
}

export default SocialMediaLink
