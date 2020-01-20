import sections from './sections'

const pages = [
  {
    fields: {
      name: 'Home',
      url: '/',
      sections,
    },
  },
  {
    fields: {
      name: 'About',
      url: '/about',
      sections,
    },
  },
  {
    fields: {
      name: 'Blog',
      url: '/blog',
      sections,
    },
  },
  {
    fields: {
      name: 'Portfolio',
      url: '/portfolio',
      sections,
    },
  },
  {
    fields: {
      name: 'Resume',
      url: '/resume',
      sections: undefined,
    },
  },
  {
    fields: {
      name: 'Education',
      url: '/resume/education',
      sections,
    },
  },
  {
    fields: {
      name: 'Work Experience',
      url: '/resume/work-experience',
      sections,
    },
  },
]

export const pagesMap = pages.reduce((pagesAcc, page) => ({
  ...pagesAcc,
  [page.fields.url]: page,
}), {})

export default pages
