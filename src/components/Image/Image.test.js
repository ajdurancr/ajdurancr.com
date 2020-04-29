import React from 'react'
import { shallow } from 'enzyme'

import Image from './Image'

describe('Image', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Image className="testClassName" src="/test/image.svg" alt="Alternative text" />)

    expect(wrapper).toMatchSnapshot()
  })
})
