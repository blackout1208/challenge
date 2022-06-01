import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from '../components/Header';
import Quizzes from './Quizzes'

const styles = {
  Container: { marginTop: "50px"}
}

function AppLayout() {
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center">
      <Header>Quizzes</Header>
      <Container maxWidth="md" sx={styles.Container}>
        <Quizzes />
      </Container>
    </Stack>
  );
}

export default AppLayout;