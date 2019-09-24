import React from 'react'
import Head from 'next/head'

import Nav from '../../components/Nav'
import styles from '../index.styles.sass'

const PageNotFound = () => (
  <>
    <Head>
      <title>PageNotFound</title>
    </Head>
    <Nav />

    <div className={styles.hero}>
      <h1 className={styles.title}>Page Not Found!</h1>
    </div>
  </>
)

export default PageNotFound
