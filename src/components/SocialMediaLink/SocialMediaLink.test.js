import React from 'react'
import { shallow } from 'enzyme'

import SocialMediaLink from './SocialMediaLink'
import socialMediaLinkProps from '../../mocks/formatted/socialMediaLink'

describe('SocialMediaLink', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SocialMediaLink {...socialMediaLinkProps} />)

    expect(wrapper).toMatchSnapshot()
  })
})
