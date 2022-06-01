import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './styles'

export default function Header({children}) {
  return (
    <Box sx={styles.Box}>
      <AppBar position="static">
        <Toolbar sx={styles.Header}>
          <Typography variant="h4" component="div" color="white" sx={styles.Title}>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
