import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Menu } from '..'

const Header = ({ pageUrl, menu }) => (
  <Menu pageUrl={pageUrl} menu={get(menu, 'fields')} />
)

Header.propTypes = {
  pageUrl: propTypes.string.isRequired,
  menu: propTypes.object.isRequired,
}

export default Header
