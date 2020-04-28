import camelCase from 'lodash.camelcase'
import get from 'lodash.get'

import * as components from '../components'

let componentsMap

const buildComponentsMap = () => Object.keys(components || {})
  .reduce((compMap, componentName) => ({
    ...compMap,
    [camelCase(componentName)]: components[componentName],
  }), {})

export const getComponentsMap = () => {
  if (!componentsMap) {
    componentsMap = buildComponentsMap()
  }


  return componentsMap
}

export const mapProps = (cmsProps) => {
  const { props = [], ...initialProps } = get(cmsProps, 'fields', [])

  return props.reduce((componentProps, { fields }) => ({
    ...componentProps,
    [fields.name]: fields.value,
  }), { ...initialProps })
}
