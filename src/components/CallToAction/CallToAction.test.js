import React from 'react'
import { shallow } from 'enzyme'

import CallToAction from './CallToAction'

describe('CallToAction', () => {
  it('renders correctly', () => {
    const cta = { link: '/test/link', text: 'Test link' }
    const wrapper = shallow(<CallToAction cta={cta} />)

    expect(wrapper).toMatchSnapshot()
  })
})
