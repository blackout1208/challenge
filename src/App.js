import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import theme from './theme';
import AppLayout from './layouts';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
