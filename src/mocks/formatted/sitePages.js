import site from '../contentful/site'

export const testInputPages = site.fields.pages.map(({ fields }) => ({
  fields: {
    ...fields,
    sections: [],
  },
}))

/*
helpers/buildSitePages output:
  buildSitePages({ ...site.fields, menu: {}, pages: testInputPages })
*/
export const sitePagesOutput = {
  '/': {
    page: '/',
    query: {
      name: 'Home',
      pageUrl: '/',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/about': {
    page: '/',
    query: {
      name: 'About',
      pageUrl: '/about',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/blog': {
    page: '/',
    query: {
      name: 'Blog',
      pageUrl: '/blog',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/portfolio': {
    page: '/',
    query: {
      name: 'Portfolio',
      pageUrl: '/portfolio',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/resume': {
    page: '/',
    query: {
      name: 'Resume',
      pageUrl: '/resume',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/resume/education': {
    page: '/',
    query: {
      name: 'Education',
      pageUrl: '/resume/education',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
  '/resume/work-experience': {
    page: '/',
    query: {
      name: 'Work Experience',
      pageUrl: '/resume/work-experience',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
}
