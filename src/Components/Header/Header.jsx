import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png'; 

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: 'none',
  transition: 'all 0.3s ease',
});

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#1a1a1a',
  flexShrink: 0,
  '& img': {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  },
});

const NavItems = styled(Box)({
  display: 'flex',
  gap: '20px',
  marginLeft: 'auto',
  alignItems: 'center',
  flexShrink: 0,
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ isActive }) => ({
  textTransform: 'none',
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '500',
  padding: '8px 0',
  position: 'relative',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: isActive ? '100%' : '0',
    height: '3px',
    background: 'linear-gradient(90deg, #C41E7B 0%, #7B2CBF 100%)',
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

export const Header = ({ activeTab, onNavClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ['Home', 'Feature', 'Pages', 'Download'];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (item) => {
    onNavClick(item);
    setDrawerOpen(false);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar
        sx={{
          width: '100%',
          px: 2, 
          display: 'flex',
          justifyContent: 'space-between',
          boxSizing: 'border-box', 
        }}
      >
        <LogoBox>
          <img src={logo} alt="Hindustan Logo" />
          <span>Hindustan</span>
        </LogoBox>

        <NavItems>
          {navItems.map((item) => (
            <NavLink
              key={item}
              isActive={activeTab === item}
              onClick={() => onNavClick(item)}
            >
              {item}
            </NavLink>
          ))}
        </NavItems>

        <IconButton
          sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}
          edge="end"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: '80vw', maxWidth: 300 },
          }}
        >
          <Box sx={{ width: '100%' }} role="presentation">
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton onClick={() => handleNavClick(item)}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};