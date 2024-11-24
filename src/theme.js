import { createTheme } from '@mui/material/styles';

// Access the CSS variables in JavaScript
const rootStyles = getComputedStyle(document.documentElement);

const theme = createTheme({
  palette: {
    primary: {
      main: rootStyles.getPropertyValue('--textMain').trim(), // Main text color
      contrastText: rootStyles.getPropertyValue('--textMain').trim(), // Accent text color
    },
    secondary: {
      main: rootStyles.getPropertyValue('--textAccent').trim(), // Neutral accent
      contrastText: rootStyles.getPropertyValue('--textAccent').trim(), // Neutral background
    },
    veryBad: {
      main: rootStyles.getPropertyValue('--veryBad').trim(),
      contrastText: rootStyles.getPropertyValue('--veryBadAccent').trim(),
    },
    bad: {
      main: rootStyles.getPropertyValue('--bad').trim(),
      contrastText: rootStyles.getPropertyValue('--badAccent').trim(),
    },
    neutral: {
      main: rootStyles.getPropertyValue('--neutral').trim(),
      contrastText: rootStyles.getPropertyValue('--neutralAccent').trim(),
    },
    good: {
      main: rootStyles.getPropertyValue('--good').trim(),
      contrastText: rootStyles.getPropertyValue('--goodAccent').trim(),
    },
    veryGood: {
      main: rootStyles.getPropertyValue('--veryGood').trim(),
      contrastText: rootStyles.getPropertyValue('--veryGoodAccent').trim(),
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});

export default theme;
