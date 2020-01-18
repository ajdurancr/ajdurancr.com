import React from 'react'
import { shallow } from 'enzyme'

import PageContent from './PageContent'

describe('PageContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PageContent content={{ name: 'Test Page' }} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<PageContent />)

    expect(wrapper).toMatchSnapshot()
  })
})
