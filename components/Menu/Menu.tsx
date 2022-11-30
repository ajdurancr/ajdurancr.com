import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

import buildSiteMenu from '../../helpers/buildSiteMenu'
import { getParentPageUrl } from '../../helpers/url'
import { SubMenu } from './SubMenu'
import { CfMenu } from '../../types/contentful'
import styles from './Menu.module.sass'

type MenuProps = {
  pageUrl: string
  menu: CfMenu
}

const Menu: React.FC<MenuProps> = ({ menu, pageUrl }) => {
  const [parentPageUrl, setParentPageUrl] = useState(getParentPageUrl(pageUrl))
  const [menuItems, setMenuItems] = useState(buildSiteMenu(menu.fields))

  useEffect(() => {
    setMenuItems(buildSiteMenu(menu.fields))
  }, [menu.fields])

  useEffect(() => {
    setParentPageUrl(getParentPageUrl(pageUrl))
  }, [pageUrl])

  return (
    <nav className={styles.menu}>
      <ul>
        {menuItems.map(({ name, url, submenu }) => (
          <li className={classnames({ activeMenuItem: parentPageUrl === url })} key={url}>
            <a href={url}>{name}</a>
            {submenu && <SubMenu submenu={submenu} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Menu }
