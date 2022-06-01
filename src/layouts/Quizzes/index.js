import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import styles from './styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const QUIZZES = [
    {
        id: 1,
        name: "Geography",
        hasStarted: false,
    },
    {
        id: 12,
        name: "General Knowledge",
        hasStarted: true,
        score: 8,
        questions: []
    }]

const CardOptions = ({ hasStarted }) => {
    if (!hasStarted){
        return <Button color="secondary" variant="contained" sx={styles.Button} >Start</Button>
    }

    return <Button color="secondary" variant="outlined">Redo</Button>
        
}

const CardContent = ({ title, subtitle}) => (
    <Stack direction="column" justifyContent="space-between"
    alignItems="flex-start" spacing={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography color="secondary" variant="subtitle" sx={styles.Subtitle}> {subtitle} </Typography>
    </Stack>
)

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }}>
          {QUIZZES.map((quiz) => (
            <Grid item xs={12} sm={6} key={quiz.id}
            justifyContent="space-between" alignItems="center">
                <Item sx={styles.Card}>
                    <Stack direction="row" justifyContent="space-between"
                    alignItems="center" spacing={2}>
                        <CardContent title={quiz.name} subtitle={quiz.hasStarted ? `Score: ${quiz.score}/${quiz.questions.length}` : "Not started"} />
                        <CardOptions hasStarted={quiz.hasStarted} />
                    </Stack>
                </Item>
            </Grid>
            ))}
      </Grid>
    </Box>
  );
}