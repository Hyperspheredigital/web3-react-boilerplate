import { ThemeOptions } from '@mui/core';
import { createTheme } from '@mui/material/styles';

export const paletteColorsDark = {
  primary: '#0f4c75',
  secondary: '#3282b8',
  error: '#E44C65',
  background: '#1b262c',
  text: '#bbe1fa',
};

export const paletteColorsLight = {
  primary: '#6886c5',
  secondary: '#ffe0ac',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505',
};

const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary,
      },
      // ...
    },
  };
};
export const darkTheme = createTheme(options(true));
export const lightTheme = createTheme(options(false));
