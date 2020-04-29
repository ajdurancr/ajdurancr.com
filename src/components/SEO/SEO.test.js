import React from 'react'
import { shallow } from 'enzyme'

import SEO from './SEO'

describe('SEO', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SEO siteName="ajdurancr" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with page title', () => {
    const wrapper = shallow(<SEO siteName="ajdurancr" title="Welcome" />)

    expect(wrapper).toMatchSnapshot()
  })
})
