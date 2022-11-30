import get from 'lodash.get'
import { CfMenu } from '../types/contentful'

export type SiteMenu = {
  url: string,
  name: string,
  submenu?: SiteMenu[],
}

const builSubmenuItems = (menu: CfMenu['fields']): SiteMenu => {
  if (!menu) return menu

  const {
    name,
    alias,
    url,
    page,
    submenu,
  } = menu
  const { url: pageUrl, name: pageName } = page?.fields || {}

  return {
    url: (pageUrl || url) as string,
    name: pageName || alias || name,
    submenu: submenu && submenu.map(
      ({ fields: submenuInfo }) => builSubmenuItems(submenuInfo),
    ),
  }
}

const buildSiteMenu = (menu: CfMenu['fields']) => {
  const menuItems = get(menu, 'submenu') || []

  return menuItems.map(
    ({ fields: submenu }) => builSubmenuItems(submenu),
  )
}

export default buildSiteMenu
