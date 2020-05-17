import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import { Image } from '..'
import appThemeMap from '../../constants/appTheme'
import { getImageThemeSuffix } from '../../helpers/appTheme'
import useAppTheme from '../../hooks/useAppTheme'
import styles from './Logo.module.sass'

const Logo = ({ className, onlyIcon }) => {
  const appTheme = useAppTheme()
  const rootUrl = onlyIcon ? 'icon' : 'logo'
  const imageSuffix = getImageThemeSuffix(appTheme, { [appThemeMap.GOLD]: '-gold' })

  return (
    <Image
      className={classnames(styles.container, className)}
      src={`/images/logo/${rootUrl}${imageSuffix}.svg`}
      alt={`${rootUrl}${imageSuffix.replace('-', ' ')}`}
    />

  )
}

Logo.defaultProps = {
  className: '',
  onlyIcon: false,
}

Logo.propTypes = {
  className: propTypes.string,
  onlyIcon: propTypes.bool,
}

export default Logo
