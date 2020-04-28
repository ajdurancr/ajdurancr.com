const get = require('lodash.get')

const buildSitePages = (siteInfo) => {
  const { pages, ...site } = siteInfo || {}

  return (pages || []).reduce((pagesObj, page) => ({
    ...pagesObj,
    [get(page, 'fields.url')]: {
      page: '/',
      query: {
        site,
        ...get(page, 'fields'),
      },
    },
  }), { '/': { page: '/' } })
}

module.exports = buildSitePages
