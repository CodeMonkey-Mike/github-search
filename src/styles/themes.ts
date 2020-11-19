import * as colors from './colors';

export const themes = {
  light: {
    primary: '#fff',
    black: '#1b1f23',
    gray: `${colors.grey300}`,
    'gray-light': `${colors.grey200}`,
    'gray-dark': `${colors.grey500}`,
    text: `${colors.grey500}`,
    link: `${colors.black}`,
    'link-hover': `${colors.grey200}`,
    'pill-hover': `${colors.grey500}`,
    header: `${colors.grey500}`,
  },
  dark: {
    primary: `${colors.black}`,
    black: '#c6c6c6',
    gray: '#afafaf',
    'gray-light': `${colors.black}`,
    'gray-dark': `${colors.white}`,
    text: `${colors.white}`,
    link: `${colors.white}`,
    'link-hover': `${colors.white}`,
    'pill-hover': `${colors.black}`,
    header: `${colors.white}`,
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
