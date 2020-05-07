import React from 'react'
import { shallow } from 'enzyme'

import Hero from './Hero'
import image from '../../mocks/contentful/media'

describe('Hero', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Hero className="testClassName" image={{ fields: image }} />)

    expect(wrapper).toMatchSnapshot()
  })
})
