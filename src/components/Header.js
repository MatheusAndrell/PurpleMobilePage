import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className="header-title">
          Ingoude Company
        </Typography>
        <div className="header-menu">
          <Typography className="header-item">Home</Typography>
          <Typography className="header-item">Service</Typography>
          <Typography className="header-item">About Us</Typography>
          <Typography className="header-item">Contact</Typography>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
