import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import { Image } from '..'
import styles from './Logo.styles.sass'

const Logo = ({ className, onlyIcon, theme }) => {
  const rootUrl = onlyIcon ? 'icon' : 'logo'

  return (
    <Image
      className={classnames(styles.container, className)}
      src={`/images/logo/${rootUrl}${theme && `-${theme}`}.svg`}
      alt={`${rootUrl} ${theme}`}
    />

  )
}

Logo.defaultProps = {
  className: '',
  onlyIcon: false,
  theme: '',
}

Logo.propTypes = {
  className: propTypes.string,
  onlyIcon: propTypes.bool,
  theme: propTypes.string,
}

export default Logo
