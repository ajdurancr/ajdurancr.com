import React from 'react'
import Head from 'next/head'

const SEO: React.FC<{ title?: string, siteName: string }> = ({ title = '', siteName }) => (
  <Head>
    <title>{`${title && `${title} | `}${siteName}`}</title>
  </Head>
)

export { SEO }
