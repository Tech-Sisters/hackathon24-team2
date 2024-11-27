import { Box, Typography, useMediaQuery, AppBar } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const theme = createTheme();

export const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); 
  };


  return (
    <AppBar id="header" position="fixed" onClick={handleNavigation}>
      <Box id="headerBar">
        <Typography id="headerText" variant={isMobile ? 'h3' : 'h2'}>
          MAIA
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
