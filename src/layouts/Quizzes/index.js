import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {useRecoilValue} from 'recoil'
import { Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './styles'
import { quizzesState } from './state'
import { answersState } from '../state'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CardOptions = ({ hasStarted, route }) => {
    if (!hasStarted){
        return <Button color="secondary" variant="contained" sx={styles.Button} to={route} component={RouterLink}>Start</Button>
    }
    return <Button color="secondary" variant="outlined" to={route} component={RouterLink}>Redo</Button>   
}

const CardContent = ({ title, subtitle}) => (
    <Stack direction="column" justifyContent="space-between"
    alignItems="flex-start" spacing={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography color="secondary" variant="subtitle" sx={styles.Subtitle}>{subtitle}</Typography>
    </Stack>
)

const calcaluteScore = (answers, questions) => {
    if (!answers){
        return
    }

    let score = 0;
    questions.forEach((question) => {
        const user_answer = answers[question.id]
        if (question.answer === user_answer){
            score++
        }
    })
    return score
}

export default function Quizzes() {
    const quizzes = useRecoilValue(quizzesState('quizzes'));
    const answers = useRecoilValue(answersState)
    
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }}>
                {quizzes.map((quiz) => {
                    const answers_to_quiz = answers[quiz.id]
                    const hasStarted = answers_to_quiz && Object.keys(answers_to_quiz).length
                    const score = calcaluteScore(answers_to_quiz, quiz.questions)

                    return <Grid item xs={12} sm={6} key={quiz.id}
                        justifyContent="space-between" alignItems="center">
                        <Item sx={styles.Card}>
                            <Stack direction="row" justifyContent="space-between"
                            alignItems="center" spacing={2}>
                                <CardContent title={quiz.name} subtitle={hasStarted ? `Score: ${score}/${quiz.questions.length}` : "Not started"} />
                                <CardOptions hasStarted={hasStarted} route={`/quiz/${quiz.id}/question/${quiz.questions[0].id}}`} />
                            </Stack>
                        </Item>
                    </Grid>
                })}
            </Grid>
        </Box>
  );
}