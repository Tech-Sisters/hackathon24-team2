
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../App.css"

const theme = createTheme();

export default function Footer() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar id="header"> */}
          <Typography id="headerText" variant={isMobile ? 'h3' : 'h2'} >
            MAIA
          </Typography>
      {/* </AppBar> */}
    </ThemeProvider>
  );
}
