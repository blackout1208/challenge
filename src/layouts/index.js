import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from '../components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Quizzes from './Quizzes'
import Questions from './Questions'

const styles = {
  Container: { marginTop: "50px"}
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
      <Header backIcon={!isDashboard}>{isDashboard ? "Quizzes" : "Test"}</Header>
      <Container maxWidth="md" sx={styles.Container}>
        <Routes>
          <Route path="/dashboard" element={<Quizzes />} />
          <Route path="/quiz/:quizID/question/:questionID" element={<Questions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Stack>
  );
}

export default AppLayout;
