import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import menu from '../../mocks/contentful/menu'

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header pageUrl="/test-url" menu={menu} socialMedia={{ testProp: 'test value' }} />)

    expect(wrapper).toMatchSnapshot()
  })
})
