import React from 'react'
import { shallow } from 'enzyme'

import Page from './Page'
import sections from '../../mocks/contentful/sections'

describe('Page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Page name="Test Page" sections={sections} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<Page name="Test Page" />)

    expect(wrapper).toMatchSnapshot()
  })
})
