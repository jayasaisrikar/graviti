import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from './logo.png'; // Import your logo image

export default function CustomAppBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: 'auto', padding: '20px'}} />
      </Toolbar>
    </AppBar>
  );
}
