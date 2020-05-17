require('dotenv').config()

const get = require('lodash.get')
const contentful = require('./src/helpers/contentful')
const buildSitePages = require('./src/helpers/buildSitePages')

const exportPathMap = async () => {
  const contentfulRes = await contentful.getEntries({
    content_type: 'site',
    'fields.id': 1,
    include: 10,
    select: 'fields',
  })
  const site = get(contentfulRes, 'items[0].fields') || {}

  return buildSitePages(site)
}

const config = {
  exportTrailingSlash: true,
  exportPathMap,
}

module.exports = config
