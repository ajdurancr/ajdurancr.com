import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import get from 'lodash.get'

import { Logo, Menu, Component } from '..'
import styles from './Header.module.sass'

const Header = ({ pageUrl, menu, socialMedia }) => (
  <div className={classnames(styles.header, 'header')}>
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <Logo className={styles.logo} />
        <Component {...(socialMedia)} />
      </div>
      <Menu pageUrl={pageUrl} menu={get(menu, 'fields')} />
    </div>
  </div>
)

Header.defaultProps = {
  socialMedia: {},
}

Header.propTypes = {
  menu: propTypes.object.isRequired,
  pageUrl: propTypes.string.isRequired,
  socialMedia: propTypes.object,
}

export default Header
