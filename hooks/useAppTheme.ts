import { useContext } from 'react'

import appThemeContext from '../context/appThemeContext'

const useAppTheme = () => useContext(appThemeContext)

export default useAppTheme
