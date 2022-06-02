import { atom } from 'recoil';

const quizIDState = atom({
    key: 'quiz-id',
    default: '',
});
  
const questionIDState = atom({
    key: 'question-id',
    default: '',
});

const answersState = atom({
    key: 'answers/atom',
    default: {}
});
  
export {
    quizIDState,
    questionIDState,
    answersState
}