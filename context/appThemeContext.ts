import { createContext } from 'react'

import { themeOptions } from '../constants/appTheme'

const appThemeContext = createContext(themeOptions.DEFAULT)

export default appThemeContext
