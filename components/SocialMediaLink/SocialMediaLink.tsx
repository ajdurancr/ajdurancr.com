import React from 'react'
import get from 'lodash.get'

import { Image } from '../Image'
import { getImageThemeSuffix } from '../../helpers/appTheme'
import useAppTheme from '../../hooks/useAppTheme'
import styles from './SocialMediaLink.module.sass'

type MediaLinkProps = {
  icon: string
  cta: {
    link: string
    text: string
  }
} 

const SocialMediaLink: React.FC<MediaLinkProps> = ({ cta, icon }) => {
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

export { SocialMediaLink }
