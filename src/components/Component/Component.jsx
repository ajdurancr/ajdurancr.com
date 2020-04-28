import React from 'react'
import camelCase from 'lodash.camelcase'

import { getComponentsMap, mapProps } from '../../helpers/components'

const Component = (cmsProps) => {
  const componentProps = mapProps(cmsProps)

  const { [camelCase(componentProps.contentType)]: CmsComponent } = getComponentsMap()

  if (!CmsComponent) return null

  return <CmsComponent {...componentProps} />
}

export default Component
