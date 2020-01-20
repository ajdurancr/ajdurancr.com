/* helpers/buildSiteMenu output: buildSiteMenu(topMenu.fields) */
export const submenuOutput = [
  {
    url: '/resume/education',
    name: 'Education',
  },
  {
    url: '/resume/work-experience',
    name: 'Work Experience',
  },
]

export const siteMenuOutput = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
  {
    url: '/resume',
    name: 'Resume',
    submenu: submenuOutput,
  },
  {
    url: '/portfolio',
    name: 'Portfolio',
  },
  {
    url: '/about',
    name: 'About',
  },
  {
    url: 'http://www.google.com',
    name: 'Menu - DCR.IO External link',
  },
  {
    url: 'http://www.google.com',
    name: 'Google',
  },
]
