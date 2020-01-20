import site from '../contentful/site'

export const testInputPages = site.fields.pages.map(({ fields }) => ({
  fields: {
    ...fields,
    sections: [],
  },
}))

/*
helpers/buildSitePages output:
  buildSitePages({ ...site.fields, topMenu: {}, pages: testInputPages })
*/
export const sitePagesOutput = {
  '/': {
    page: '/',
    query: {
      content: {
        name: 'Home',
        url: '/',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/about': {
    page: '/',
    query: {
      content: {
        name: 'About',
        url: '/about',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/blog': {
    page: '/',
    query: {
      content: {
        name: 'Blog',
        url: '/blog',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/portfolio': {
    page: '/',
    query: {
      content: {
        name: 'Portfolio',
        url: '/portfolio',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/resume': {
    page: '/',
    query: {
      content: {
        name: 'Resume',
        url: '/resume',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/resume/education': {
    page: '/',
    query: {
      content: {
        name: 'Education',
        url: '/resume/education',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
  '/resume/work-experience': {
    page: '/',
    query: {
      content: {
        name: 'Work Experience',
        url: '/resume/work-experience',
        sections: [],
      },
      site: {
        name: 'DURANCR.IO',
        id: 1,
        topMenu: {},
      },
    },
  },
}
