import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import buildSiteMenu from '../../helpers/buildSiteMenu'
import { getParentPageUrl } from '../../helpers/url'

import SubMenu from './SubMenu'
import styles from './Menu.module.sass'

const Menu = ({ menu, pageUrl }) => {
  const [parentPageUrl, setParentPageUrl] = useState(getParentPageUrl(pageUrl))
  const [menuItems, setMenuItems] = useState(buildSiteMenu(menu))

  useEffect(() => {
    setMenuItems(buildSiteMenu(menu))
  }, [menu])

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

Menu.defaultProps = {
  menu: {},
}

Menu.propTypes = {
  pageUrl: propTypes.string.isRequired,
  menu: propTypes.shape({
    name: propTypes.string,
    submenu: propTypes.arrayOf(
      propTypes.shape({
        alias: propTypes.string,
        name: propTypes.string,
        page: propTypes.object,
        submenu: propTypes.arrayOf(propTypes.object),
        url: propTypes.string,
      }),
    ),
  }),
}

export default Menu
