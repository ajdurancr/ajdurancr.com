import React from 'react'
import get from 'lodash.get'

type Cta = {
  text: string,
  link: string,
}

const CallToAction: React.FC<{ cta: Cta }> = ({ cta }) => (
  <a href={get(cta, 'link')}>{get(cta, 'text')}</a>
)

export { CallToAction }
