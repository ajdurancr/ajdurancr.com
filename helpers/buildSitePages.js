/** @typedef {import('../types/contentful').CfSite} CfSite*/

/**
 * @type function
 * @parameter {CfSite} site
 * @returns {{ [pageUrl: string]: { page: string, query: { [key: string]: any }} }}  
 */
const buildSitePages = (site) => {
  const { pages, ...siteFields } = site.fields || {}

  return (pages || []).reduce((pagesObj, { fields: { url: pageUrl, seo, ...fields } }) => ({
    ...pagesObj,
    [pageUrl]: {
      page: '/',
      query: {
        ...fields,
        site: siteFields,
        pageUrl,
        seo: seo?.fields,
      },
    },
  }), { '/': { page: '/' } })
}

module.exports = buildSitePages
