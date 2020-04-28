import buildSiteMenu from './buildSiteMenu'
import menu from '../mocks/contentful/menu'
import { siteMenuOutput } from '../mocks/formatted/siteMenu'

describe('helpers/buildSiteMenu', () => {
  it('returns Menu with menu items', () => {
    expect(
      buildSiteMenu(menu.fields),
    ).toEqual(siteMenuOutput)
  })
})
