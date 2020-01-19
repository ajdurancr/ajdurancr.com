import get from 'lodash.get'

const builSubmenuItems = (menu) => {
  if (!menu) return menu

  const {
    name,
    alias,
    url,
    page,
    submenu,
  } = menu
  const { url: pageUrl, name: pageName } = get(page, 'fields', {})

  return {
    url: pageUrl || url,
    name: pageName || alias || name,
    submenu: submenu && submenu.map(
      ({ fields: submenuInfo }) => builSubmenuItems(submenuInfo),
    ),
  }
}

const buildSiteMenu = (menu) => {
  const menuItems = get(menu, 'submenu') || []

  return menuItems.map(
    ({ fields: submenu }) => builSubmenuItems(submenu),
  )
}

export default buildSiteMenu
