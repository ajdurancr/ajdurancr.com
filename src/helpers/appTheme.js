import get from 'lodash.get'
import appThemeMap, { imageSuffixByTheme } from '../constants/appTheme'

export const getImageThemeSuffix = (appTheme, customSuffixes = {}) => get(
  { ...imageSuffixByTheme, ...customSuffixes },
  `${appTheme}`,
  imageSuffixByTheme[appThemeMap.DEFAULT],
)
