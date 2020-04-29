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

const mapPropCta = ({ text, value }) => ({ text, link: value })
const mapPropDefault = ({ value }) => value

const customMapProps = {
  propCta: mapPropCta,
}

export const mapProps = (cmsProps) => {
  const { props = [], ...initialProps } = get(cmsProps, 'fields', [])
  return props.reduce((componentProps, { sys, fields }) => {
    const mapPropFunc = customMapProps[get(sys, 'contentType.sys.id')] || mapPropDefault
    const prop = mapPropFunc(fields)

    return ({
      ...componentProps,
      [fields.name]: prop,
    })
  }, { ...initialProps, contentType: camelCase(initialProps.contentType) })
}
