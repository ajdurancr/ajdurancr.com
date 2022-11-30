import React from 'react'
import get from 'lodash.get'

import { Component } from '../Component'
import styles from './SocialMedia.module.sass'
import { CfComponent } from '../../types/contentful'

const SocialMedia: React.FC<{ socialMediaLinks: CfComponent[] }> = ({ socialMediaLinks }) => (
  <div className={styles.container}>
    {socialMediaLinks?.map((component) => (
      <Component key={get(component, 'sys.id')} component={component} />
    ))}
  </div>
)

export { SocialMedia }
