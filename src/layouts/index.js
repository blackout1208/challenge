import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from '../components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Quizzes from './Quizzes'
import Questions from './Questions'
import LinearProgress from '@mui/material/LinearProgress';

const styles = {
  Container: { 
    marginTop: "50px",
  },
  LoadingComponent: {
    height: "2px",
    marginTop: "-50px"
  }
}

const PageNotFound = () => <div>
  Page not found<br />
  <a href="/dashboard">Go to dashboard</a>
  </div>

function AppLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard"
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center">
      <React.Suspense fallback={<LinearProgress color="secondary" sx={styles.LoadingComponent} />}>
        <Header backIcon={!isDashboard} />
      </React.Suspense>
      <Container maxWidth="md" sx={styles.Container}>
        <React.Suspense fallback={<LinearProgress color="secondary" sx={styles.LoadingComponent} />}>
          <Routes>
            <Route path="/dashboard" element={<Quizzes />} />
            <Route path="/quiz/:quizID/question/:questionID" element={<Questions />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Suspense>
      </Container>
    </Stack>
  );
}

export default AppLayout;
