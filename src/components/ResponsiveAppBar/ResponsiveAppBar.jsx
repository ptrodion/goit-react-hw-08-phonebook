import { AppBar } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/authNav';
import LogInImg from '../../images/user-login-icon.png';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  main: '#46747c',
  hover: '#636297',
});

const pages = [{ label: 'Home', path: '/' }];

export const ResponsiveAppBar = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  useEffect(() => {
    if (isLoggedIn && pages.length === 1) {
      pages.push({ label: 'Contacts', path: '/contacts' });
      setLoggedIn(true);
    } else if (!isLoggedIn && pages.length === 2) {
      pages.splice(1, 1);
      setLoggedIn(false);
    }
  }, [isLoggedIn, loggedIn, isRefreshing]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: theme.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>{page.label}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button sx={{ display: 'flex', gap: 20 }} key={page.label}>
                <Link
                  style={{ textDecoration: 'none', color: '#fff' }}
                  to={page.path}
                >
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      bgcolor: 'white',
                      p: 0.5,
                      '&:hover': { bgcolor: theme.hover },
                    }}
                  >
                    <Avatar alt="Avatar" src={LogInImg} />
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
                  <AuthNav />
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
