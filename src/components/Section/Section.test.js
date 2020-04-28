import React from 'react'
import { shallow } from 'enzyme'

import Section from './Section'
import { section } from '../../mocks/contentful/sections'

describe('Section', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Section {...section} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<Section name="Test Section" />)

    expect(wrapper).toMatchSnapshot()
  })
})
