import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

const CallToAction = ({ cta }) => (
  <a href={get(cta, 'link')}>{get(cta, 'text')}</a>
)

CallToAction.propTypes = {
  cta: propTypes.shape({
    link: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
}

export default CallToAction
