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
      url: '/',
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
      url: '/about',
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
      url: '/blog',
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
      url: '/portfolio',
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
      url: '/resume',
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
      url: '/resume/education',
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
      url: '/resume/work-experience',
      sections: [],
      site: {
        name: 'DURANCR.IO',
        id: 1,
        menu: {},
      },
    },
  },
}
