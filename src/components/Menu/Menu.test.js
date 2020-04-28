import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'
import menu from '../../mocks/contentful/menu'

const pageUrl = '/'

describe('Menu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Menu pageUrl={pageUrl} menu={menu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<Menu pageUrl={pageUrl} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly when submenu item selected', () => {
    const wrapper = shallow(<Menu pageUrl="/resume/education" menu={menu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })
})
