import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Quizzes from './Quizzes'

const styles = {
  Container: { marginTop: "50px"}
}

const PageNotFound = () => <div>
  Page not found<br />
  <a href="/dashboard">Go to dashboard</a>
  </div>

function AppLayout() {
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center">
      <Header>Quizzes</Header>
      <Container maxWidth="md" sx={styles.Container}>
        <Routes>
          <Route path="/dashboard" element={<Quizzes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Stack>
  );
}

export default AppLayout;
