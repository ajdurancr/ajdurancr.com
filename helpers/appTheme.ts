import get from 'lodash.get'

import { imageSuffixByTheme, themeOptions } from '../constants/appTheme'

export const getImageThemeSuffix = (appTheme: string, customSuffixes = {}) => get(
  { ...imageSuffixByTheme, ...customSuffixes },
  `${appTheme}`,
  imageSuffixByTheme[themeOptions.DEFAULT],
)
