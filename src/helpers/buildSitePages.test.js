import buildSitePages from './buildSitePages'
import site from '../mocks/contentful/site'
import { testInputPages, sitePagesOutput } from '../mocks/formatted/sitePages'

describe('helpers/buildSitePages', () => {
  it('returns pages export map', () => {
    expect(
      buildSitePages({ ...site.fields, menu: {}, pages: testInputPages }),
    ).toEqual(sitePagesOutput)
  })
})
