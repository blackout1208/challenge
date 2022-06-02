import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './styles'

export default function Header({backIcon, children}) {
  return (
    <Box sx={styles.Box}>
      <AppBar position="static">
        <Toolbar sx={styles.Header}>
          {backIcon && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <ArrowBackOutlinedIcon />
          </IconButton>}
          <Typography variant="h4" component="div" color="white" sx={styles.Title}>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
