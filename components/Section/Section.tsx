import React from 'react'
import get from 'lodash.get'

import type { CfComponent } from '../../types/contentful'
import { Component } from '../Component'

const Section: React.FC<{ components?: CfComponent[] }> = ({ components = [] }) => (
  <>
    {components && components.map((component) => (
      <Component key={get(component, 'sys.id')} component={component} />
    ))}
  </>
)

export { Section }
