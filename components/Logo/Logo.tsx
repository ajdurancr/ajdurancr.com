import React from 'react'
import classnames from 'classnames'

import { Image } from '../Image'
import { themeOptions } from '../../constants/appTheme'
import { getImageThemeSuffix } from '../../helpers/appTheme'
import useAppTheme from '../../hooks/useAppTheme'
import styles from './Logo.module.sass'

const Logo: React.FC<{ className?: string, onlyIcon?: boolean }> = ({ className = '', onlyIcon }) => {
  const appTheme = useAppTheme()
  const rootUrl = onlyIcon ? 'icon' : 'logo'
  const imageSuffix = getImageThemeSuffix(appTheme, { [themeOptions.GOLD]: '-gold' })

  return (
    <Image
      className={classnames(styles.container, className)}
      src={`/images/logo/${rootUrl}${imageSuffix}.svg`}
      alt={`${rootUrl}${imageSuffix.replace('-', ' ')}`}
    />

  )
}

export { Logo }
