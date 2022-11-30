require('dotenv').config()

const get = require('lodash.get')
const contentful = require('./helpers/contentful')
const buildSitePages = require('./helpers/buildSitePages')

const exportPathMap = async () => {
  const contentfulRes = await contentful.getEntries({
    content_type: 'site',
    'fields.id': 1,
    include: 10,
    select: 'fields',
  })
  const site = get(contentfulRes, 'items[0]') || {}

  return buildSitePages(site)
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exportPathMap,
}

module.exports = nextConfig
