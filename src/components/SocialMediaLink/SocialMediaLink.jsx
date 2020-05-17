import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Image } from '..'
import { getImageThemeSuffix } from '../../helpers/appTheme'
import useAppTheme from '../../hooks/useAppTheme'
import styles from './SocialMediaLink.module.sass'

const SocialMediaLink = ({ cta, icon }) => {
  const appTheme = useAppTheme()

  if (!cta && icon) return null

  const imageSuffix = getImageThemeSuffix(appTheme)

  return (
    <a href={get(cta, 'link')} className={styles.link}>
      <Image
        src={`/images/${icon}${imageSuffix}.svg`}
        alt={get(cta, 'text')}
      />
    </a>
  )
}

SocialMediaLink.propTypes = {
  icon: propTypes.string.isRequired,
  cta: propTypes.shape({
    link: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
}

export default SocialMediaLink
