import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import "./landing.css"

const theme = createTheme();

export default function HeaderMain() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <AppBar id="headerMain">
          <Typography id="headerLogo" variant={isMobile ? 'h3' : 'h2'} >
            MAIA
          </Typography>
      </AppBar>
  );
}
