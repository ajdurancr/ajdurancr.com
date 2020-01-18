const get = require('lodash.get')

const { DEFAULT_PAGE_TYPE, pageTypes } = require('../constants/pages')

const buildSitePages = (siteInfo) => {
  const { pages, ...site } = siteInfo || {}

  return (pages || []).reduce((pagesObj, page) => ({
    ...pagesObj,
    [get(page, 'fields.url')]: {
      page: pageTypes[get(page, 'fields.type')] || DEFAULT_PAGE_TYPE,
      query: {
        content: get(page, 'fields'),
        site,
      },
    },
  }), {})
}

module.exports = buildSitePages
