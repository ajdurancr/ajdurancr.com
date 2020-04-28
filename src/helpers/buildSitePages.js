const buildSitePages = (siteInfo) => {
  const { pages, ...site } = siteInfo || {}

  return (pages || []).reduce((pagesObj, { fields: { url: pageUrl, ...fields } }) => ({
    ...pagesObj,
    [pageUrl]: {
      page: '/',
      query: {
        site,
        pageUrl,
        ...fields,
      },
    },
  }), { '/': { page: '/' } })
}

module.exports = buildSitePages
