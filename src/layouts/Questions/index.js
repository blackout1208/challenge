import {useEffect, React} from 'react';
import Box from '@mui/material/Box';
import _ from 'lodash'
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import {useRecoilValue, useRecoilState} from 'recoil'
import { questionsState, answersState, quizIDState, questionIDState } from './state'
import { Button, Stack, Paper, Typography, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';

const Answers = ({ options, quizID, questionID }) => {
    const [answers, setAnswer] = useRecoilState(answersState)
    const handleChoice = (event) => {
        const quiz = {...answers[quizID]}
        setAnswer({
            ...answers,
            [quizID]: {
                ...quiz,
                [questionID]: event.target.value
            },
        })
    }

    const answer = answers && answers[quizID] && answers[quizID][questionID]
    return <FormControl sx={{width: "100%"}}>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        onChange={handleChoice}
        value={answer ? answer : ''}
        name="radio-buttons-group">
            {options.split(",").map((option) => <Paper key={option} elevation={3} sx={{ padding: "20px"}}><FormControlLabel value={option} control={<Radio />} label={option} /></Paper>)}
        </RadioGroup>
    </FormControl>
}

const getPage = (questions, questionID) => {
    const page = _.findIndex(questions, (question) => question.id == questionID);
    if (page === -1){
        return 0
    }
    return page
}

const getQuestionByIndex = (questions, index) => {
    if (index < 0 || index >= questions.length){
        return;
    }
    return questions[index].id
}

export default function Questions() {
    const {quizID: quizIDParam, questionID: questionIDParam} = useParams();
    const [quizID, setQuizIDState] = useRecoilState(quizIDState);
    const [questionID, setQuestionIDState] = useRecoilState(questionIDState);

    useEffect(() => {
        if (!quizID || quizIDParam !== quizID) {
            setQuizIDState(quizIDParam);
        }
        if (!questionID || questionIDParam !== questionID) {
            setQuestionIDState(questionIDParam);
        }
    });
    const questions = useRecoilValue(questionsState('questions'));
    if (!questions || questions.length === 0) {
        return;
    }
    
    const page = getPage(questions, questionID);
    
    const nextPage = `/quiz/${quizID}/question/${getQuestionByIndex(questions, page+1)}`
    const prevPage = `/quiz/${quizID}/question/${getQuestionByIndex(questions, page-1)}`
    const question = questions && questions[page]

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" align='center' sx={{marginBottom: "20px"}}>{question.text}</Typography>
            <Answers options={question.options} quizID={"idZ"} questionID={question.id} />
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginTop: "30px"}}>
                <Button variant="outlined" disabled={page === 0} to={prevPage} component={RouterLink}>Back</Button>
                <Button variant="contained" disabled={page === questions.length-1} to={nextPage} component={RouterLink}>Next</Button>
            </Stack>
        </Box>
    );
}