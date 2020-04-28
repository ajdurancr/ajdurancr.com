import { pagesMap } from './pages'

export const childSubmenu = [
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Resume / Education',
      page: pagesMap['/resume/education'],
      submenu: undefined,
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Resume / Work Experience',
      page: pagesMap['/resume/work-experience'],
      submenu: undefined,
      url: undefined,
    },
  },
]

export const submenu = [
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Home Item',
      page: pagesMap['/'],
      submenu: undefined,
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Blog',
      page: pagesMap['/blog'],
      submenu: undefined,
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Resume',
      submenu: childSubmenu,
      page: pagesMap['/resume'],
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO Portfolio',
      page: pagesMap['/portfolio'],
      submenu: undefined,
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO About',
      page: pagesMap['/about'],
      submenu: undefined,
      url: undefined,
    },
  },
  {
    fields: {
      alias: undefined,
      name: 'Menu - DCR.IO External link',
      submenu: undefined,
      page: undefined,
      url: 'http://www.google.com',
    },
  },
  {
    fields: {
      alias: 'Google',
      name: 'Menu - DCR.IO External link with alias',
      submenu: undefined,
      page: undefined,
      url: 'http://www.google.com',
    },
  },
]

export default {
  fields: {
    name: 'Top Menu',
    submenu,
  },
}
