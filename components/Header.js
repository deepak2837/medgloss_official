import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MedglossLogo from './Medgloss';
// import './header.css'
import Link from 'next/link';

const pages = ['Question Bank', 'Case Studies','Previous year papers','Mock Tests', 'Virtual Surgery'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',minWidth:"400px",borderRadius:"16px"} }  position="fixed">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
        <Link href="/" passHref>
  <MedglossLogo />
</Link>
         <div> <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml:1,
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize:"xx-large",
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Medgloss
          </Typography></div>

   
      <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Medgloss
          </Typography>
 
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx:1,
                  color: 'white',
                  display: 'block',
                  borderRadius:"12px",
                  border: '1px solid white', // Add this line
                }}
              >
              {page}
              </Button>
            ))}
          </Box>

          <Box sx={{  }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p:0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <div style={{width:"100vw" }}> 
                 <Link href="/comingsoon">
                 <Typography   border="2px solid #FF8E53"
      borderRadius="10px" padding="0.5rem"  textAlign="center">{setting}</Typography>
      </Link>
      </div>
                </MenuItem>
              ))}
            </Menu>
          </Box>   
            <Box sx={{ flexGrow: "inherit" , justifyContent:"flex-end",display: {  md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'center' },
              }}
            >
         {pages.map((page) => (
  <MenuItem key={page} onClick={handleCloseNavMenu}>
    <div style={{width:"100rem" }} >
    <Link href="/comingsoon">
      <Typography
   
      border="2px solid #FF8E53"
      borderRadius="10px"
      textAlign="center"
      padding="0.5rem 0" // Add padding to increase the height
    >
      {page}
    </Typography>
    </Link></div>
    
  </MenuItem>
))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;