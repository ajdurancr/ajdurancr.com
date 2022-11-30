import React from 'react'
import classnames from 'classnames'

import type { CfComponent, CfMenu } from '../../types/contentful'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { Component } from '../Component'
import styles from './Header.module.sass'

type HeaderProps = {
  menu: CfMenu
  pageUrl: string
  socialMedia?: CfComponent
}

const Header: React.FC<HeaderProps> = ({ pageUrl, menu, socialMedia }) => (
  <div className={classnames(styles.header, 'header')}>
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <Logo className={styles.logo} />
        {socialMedia && <Component component={socialMedia} />}
      </div>
      <Menu pageUrl={pageUrl} menu={menu} />
    </div>
  </div>
)

export { Header }
