import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: '#ffffff',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
