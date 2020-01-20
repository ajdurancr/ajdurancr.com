import buildSiteMenu from './buildSiteMenu'
import topMenu from '../mocks/contentful/topMenu'
import { siteMenuOutput } from '../mocks/formatted/siteMenu'

describe('helpers/buildSiteMenu', () => {
  it('returns TopMenu with menu items', () => {
    expect(
      buildSiteMenu(topMenu.fields),
    ).toEqual(siteMenuOutput)
  })
})
