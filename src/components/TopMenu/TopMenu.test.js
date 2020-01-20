import React from 'react'
import { shallow } from 'enzyme'

import TopMenu from './TopMenu'
import topMenu from '../../mocks/contentful/topMenu'

const currentPageUrl = '/'

describe('TopMenu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TopMenu currentPageUrl={currentPageUrl} menu={topMenu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const wrapper = shallow(<TopMenu currentPageUrl={currentPageUrl} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly when submenu item selected', () => {
    const wrapper = shallow(<TopMenu currentPageUrl="/resume/education" menu={topMenu.fields} />)

    expect(wrapper).toMatchSnapshot()
  })
})
