import React from 'react'

import components from '../components'
import { getComponentsMap, mapProps } from './components'
import { component } from '../mocks/contentful/components'
import { componentProps } from '../mocks/formatted/components'

jest.mock('../components', () => ({}))

const TestComponent = () => <div>Test Component</div>
const ChildComponent = () => <div>Child Component</div>

describe('helpers/components', () => {
  describe('getComponentsMap', () => {
    beforeAll(() => {
      components.TestComponent = TestComponent
      components.ChildComponent = ChildComponent
    })
    it('builds a map with all components', () => {
      expect(getComponentsMap()).toMatchSnapshot()
    })
  })
  describe('mapProps', () => {
    it('returns a props object for a given component', () => {
      expect(mapProps(component)).toEqual(componentProps)
    })
  })
})
