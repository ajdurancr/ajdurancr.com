import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Menu } from '..'

const Header = ({ currentPageUrl, menu }) => (
  <Menu currentPageUrl={currentPageUrl} menu={get(menu, 'fields')} />
)

Header.propTypes = {
  currentPageUrl: propTypes.string.isRequired,
  menu: propTypes.object.isRequired,
}

export default Header
