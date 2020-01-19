export const getParentPageUrl = (url = '') => {
  const [, parentPageUrl] = url.split('/')

  return `/${parentPageUrl}`
}
