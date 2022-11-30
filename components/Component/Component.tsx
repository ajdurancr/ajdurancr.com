import React from 'react'

import type { CfComponent } from '../../types/contentful'
import { getCmsComponents, mapProps } from '../../helpers/components'

const Component: React.FC<{ component: CfComponent }> = ({ component }) => {
  const componentProps = mapProps(component)
  const { [componentProps.contentType]: CmsComponent } = getCmsComponents()

  if (!CmsComponent) return null

  return <CmsComponent {...componentProps} />
}

export { Component }
