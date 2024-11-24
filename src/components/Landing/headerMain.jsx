import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <AppBar 
        position="fixed" 
        color="primary"
        sx={{
          width: '100%', // Ensure it spans the full width
          top: 0,        // Stick to the top
          left: 0,       // Stick to the left
        }}
      >
        <Toolbar>
          <Typography 
            variant={isMobile ? 'h5' : 'h4'} 
            component="div" 
            sx={{
              flexGrow: 1, 
              textAlign: 'center', 
              fontFamily: 'Roboto, sans-serif', 
              fontWeight: 'bold', 
              letterSpacing: 2,
            }}
          >
            MAIA
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: '64px' }} />
    </ThemeProvider>
  );
}
