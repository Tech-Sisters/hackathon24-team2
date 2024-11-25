import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home, Chat, Calendar, User } from '../assets/icons.jsx'; 

const Footer = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = ( newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <BottomNavigation
      id="footer"
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        className='footerIcon'
        icon={<img src={Home} alt="Home"/>}
        onClick={() => handleNavigation('/')} 
      />
      <BottomNavigationAction
      className='footerIcon'
        icon={<img src={Chat} alt="Chat"  />}
        onClick={() => handleNavigation('/maia')} 
      />
      <BottomNavigationAction
      className='footerIcon'
        icon={<img src={Calendar} alt="Calendar"  />}
        onClick={() => handleNavigation('/tracker')} 
      />
      <BottomNavigationAction
      className='footerIcon'
        icon={<img src={User} alt="User" />}
        onClick={() => handleNavigation('/settings')} 
      />
    </BottomNavigation>
  );
};

export default Footer;
