require('dotenv').config()

const withSass = require('@zeit/next-sass')
const get = require('lodash.get')
const contentful = require('./src/helpers/contentful')
const buildSitePages = require('./src/helpers/buildSitePages')

const exportPathMap = async () => {
  const contentfulRes = await contentful.getEntries({
    content_type: 'site',
    'fields.id': 1,
  })
  const site = get(contentfulRes, 'items[0].fields') || {}

  return buildSitePages(site)
}

const config = {
  cssModules: true,
  exportTrailingSlash: true,
  exportPathMap,
}

module.exports = withSass(config)
