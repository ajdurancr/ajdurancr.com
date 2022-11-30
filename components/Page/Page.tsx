import React from 'react'

import type { CfSection, CfSEO, CfSite } from '../../types/contentful'
import { Section } from '../Section'
import styles from './Page.module.sass'

export type PageProps = {
  appTheme?: string
  site: CfSite['fields']
  pageUrl: string
  name: string
  seo?: CfSEO['fields']
  sections?: CfSection[]
}

const Page: React.FC<PageProps> = ({ sections }) => (
  <div className={styles.container}>
    {sections?.map(({ sys, fields }) => (
      <Section key={sys.id} {...fields} />
    ))}
  </div>
)

export { Page }
