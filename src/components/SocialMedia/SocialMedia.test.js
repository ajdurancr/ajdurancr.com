import React from 'react'
import { shallow } from 'enzyme'

import SocialMedia from './SocialMedia'
import socialMediaLinks from '../../mocks/contentful/socialMediaLinks'

describe('SocialMedia', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SocialMedia socialMediaLinks={socialMediaLinks} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, socialMediaLinks:falsy', () => {
    const wrapper = shallow(<SocialMedia />)

    expect(wrapper).toMatchSnapshot()
  })
})
