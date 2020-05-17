import React from 'react'
import { shallow } from 'enzyme'

import Logo from './Logo'
import appTheme from '../../constants/appTheme'

jest.mock('../../hooks/useAppTheme', () => jest.fn())

const useAppTheme = require('../../hooks/useAppTheme')

describe('Logo', () => {
  beforeEach(() => {
    useAppTheme.mockReturnValue(appTheme.DEFAULT)
  })

  it('renders correctly default logo', () => {
    const wrapper = shallow(<Logo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, theme:dark', () => {
    useAppTheme.mockReturnValue(appTheme.DARK)
    const wrapper = shallow(<Logo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, theme:light', () => {
    useAppTheme.mockReturnValue(appTheme.LIGHT)
    const wrapper = shallow(<Logo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, theme:gold', () => {
    useAppTheme.mockReturnValue(appTheme.GOLD)
    const wrapper = shallow(<Logo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with default logo', () => {
    const wrapper = shallow(<Logo onlyIcon />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with theme:dark', () => {
    useAppTheme.mockReturnValue(appTheme.DARK)
    const wrapper = shallow(<Logo onlyIcon />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly, onlyIcon with theme:light', () => {
    useAppTheme.mockReturnValue(appTheme.LIGHT)
    const wrapper = shallow(<Logo onlyIcon />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with className value', () => {
    const wrapper = shallow(<Logo className="testClassName" />)

    expect(wrapper).toMatchSnapshot()
  })
})
