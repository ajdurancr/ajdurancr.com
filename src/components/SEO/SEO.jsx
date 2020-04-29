import React from 'react'
import Head from 'next/head'
import propTypes from 'prop-types'

const SEO = ({ title, siteName }) => (
  <Head>
    <title>{`${title && `${title} - `}${siteName}`}</title>
  </Head>
)


SEO.defaultProps = {
  title: '',
}

SEO.propTypes = {
  title: propTypes.string,
  siteName: propTypes.string.isRequired,
}


export default SEO
