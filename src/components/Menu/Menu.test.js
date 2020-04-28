import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'
import menu from '../../mocks/contentful/menu'

const currentPageUrl = '/'

describe('Menu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Menu currentPageUrl={currentPageUrl} menu={menu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<Menu currentPageUrl={currentPageUrl} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly when submenu item selected', () => {
    const wrapper = shallow(<Menu currentPageUrl="/resume/education" menu={menu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })
})
