const DEFAULT = 'default'
const DARK = 'dark'
const LIGHT = 'light'
const GOLD = 'gold'

export const imageSuffixByTheme = {
  [DEFAULT]: '-light',
  [LIGHT]: '',
  [DARK]: '-light',
}

export const themeOptions = Object.freeze({
  DEFAULT,
  DARK,
  GOLD,
  LIGHT,
})
