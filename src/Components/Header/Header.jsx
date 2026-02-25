import { AppBar, Toolbar, Box, Button, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: 'none',
  padding: '20px 0',
  transition: 'all 0.3s ease',
});

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#1a1a1a',
  '& .logo-icon': {
    width: '32px',
    height: '32px',
    background: 'linear-gradient(135deg, #C41E7B 0%, #7B2CBF 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

const NavItems = styled(Box)({
  display: 'flex',
  gap: '40px',
  marginLeft: 'auto',
  marginRight: '40px',
  alignItems: 'center',
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
  const navItems = ['Home', 'Feature', 'Services', 'Pricing', 'Pages', 'Contact'];

  return (
    <StyledAppBar position="sticky">
      <Toolbar
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          px: { xs: 2, md: 4 },
        }}
      >
        <LogoBox>
          <div className="logo-icon">H</div>
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
      </Toolbar>
    </StyledAppBar>
  );
};