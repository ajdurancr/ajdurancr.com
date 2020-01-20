import React from 'react'
import { shallow } from 'enzyme'

import SubMenu from './SubMenu'
import { submenuOutput } from '../../mocks/formatted/siteMenu'

describe('SubMenu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SubMenu submenu={submenuOutput} />)

    expect(wrapper).toMatchSnapshot()
  })
})
