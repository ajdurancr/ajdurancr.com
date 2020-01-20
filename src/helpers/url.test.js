import { getParentPageUrl } from './url'
import { pagesMap } from '../mocks/contentful/pages'

describe('helpers/url', () => {
  describe('getParentPageUrl', () => {
    it('returns parent url correctly', () => {
      expect(
        getParentPageUrl(pagesMap['/resume/education'].fields.url),
      ).toEqual(pagesMap['/resume'].fields.url)
    })

    it('returns parent url correctly when page is top parent page', () => {
      expect(
        getParentPageUrl(pagesMap['/resume'].fields.url),
      ).toEqual(pagesMap['/resume'].fields.url)
    })

    it('returns parent url correctly with the home page\' url', () => {
      expect(
        getParentPageUrl(pagesMap['/'].fields.url),
      ).toEqual(pagesMap['/'].fields.url)
    })
  })
})
