import camelCase from 'lodash.camelcase'
import get from 'lodash.get'

import { getComponentsMap, ReactComponentsMap } from '../components'
import { CfComponent } from '../types/contentful'

let componentsMap: ReactComponentsMap

const buildComponentsMap = () => {
  const componentsMap = getComponentsMap();
  
  return Object.keys(componentsMap)
  .reduce((compMap, componentName) => ({
    ...compMap,
    [camelCase(componentName)]: componentsMap[componentName],
  }), {})}

export const getCmsComponents = () => {
  if (!componentsMap) {
    componentsMap = buildComponentsMap()
  }

  return componentsMap
}

const mapPropCta = ({ text, value }: { text: string, value: string }) => ({ text, link: value })
const mapPropDefault = ({ value }: { value: string }) => value

const customMapProps: { [propName: string]: (...args: any[]) => any } = {
  propCta: mapPropCta,
}

export const mapProps = (cmsProps: CfComponent): { [prop: string]: any } => {
  const { props = [], ...initialProps } = cmsProps.fields || {}
  return props.reduce((componentProps, { sys, fields }) => {
    const mapPropFunc = customMapProps[get(sys, 'contentType.sys.id')] || mapPropDefault
    const prop = mapPropFunc(fields)

    return ({
      ...componentProps,
      [fields.name]: prop,
    })
  }, { ...initialProps, contentType: camelCase(initialProps.contentType) })
}
