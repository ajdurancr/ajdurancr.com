import React from 'react'

import { getComponentsMap, mapProps } from '../../helpers/components'

const Component = (cmsProps) => {
  const componentProps = mapProps(cmsProps)

  const { [componentProps.contentType]: CmsComponent } = getComponentsMap()

  if (!CmsComponent) return null

  return <CmsComponent {...componentProps} />
}

export default Component
