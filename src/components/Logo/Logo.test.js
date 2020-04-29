import React from 'react'
import { shallow } from 'enzyme'

import Logo from './Logo'

describe('Logo', () => {
  it('renders correctly default logo', () => {
    const wrapper = shallow(<Logo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, theme:dark', () => {
    const wrapper = shallow(<Logo theme="dark" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, theme:light', () => {
    const wrapper = shallow(<Logo theme="light" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with default logo', () => {
    const wrapper = shallow(<Logo onlyIcon />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with theme:dark', () => {
    const wrapper = shallow(<Logo onlyIcon theme="dark" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with theme:light', () => {
    const wrapper = shallow(<Logo onlyIcon theme="light" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with className value', () => {
    const wrapper = shallow(<Logo className="testClassName" />)

    expect(wrapper).toMatchSnapshot()
  })
})
