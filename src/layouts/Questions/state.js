import { selector, atom, atomFamily, selectorFamily } from 'recoil';
import _ from 'lodash';

const quizIDState = atom({
    key: 'quiz-id',
    default: '',
});
  
const questionIDState = atom({
    key: 'question-id',
    default: '',
});

const getQuestions = selector({
    key: 'fetchQuestions',
    get: async ({ get }) => {
        const quizID = get(quizIDState);
        if (!quizID) return;
        console.log("quiz", quizID)
        const operationsDoc = `
            query MyQuery {
                questions(where: {quiz_id: {_eq: "${quizID}"}}) {
                    answer
                    id
                    options
                    text
                    quiz_id
                }
            }
        `;
        const { errors, data } = await fetchMyQuery(operationsDoc);
        if (errors) {
            console.error("errors", errors);
        }
        return data
    }
});

const questionsState = atomFamily({
    key: 'questionsState',
    default: selectorFamily({
      key: 'questions/Default',
      get: (attribute) => ({get}) => {
        const dbValues = get(getQuestions);
        return _.get(dbValues, attribute);
      },
    })
});

const answersState = atom({
    key: 'answers/atom',
    default: {}
});
  
export {
    quizIDState,
    questionIDState,
    getQuestions,
    questionsState,
    answersState
}

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
        "https://flash-quiz.hasura.app/v1/graphql",
        {
            method: "POST",
            body: JSON.stringify({
                query: operationsDoc,
                variables: variables,
                operationName: operationName
            })
        }
    );
    
    return await result.json();
}
    
function fetchMyQuery(operationsDoc) {
    return fetchGraphQL(
        operationsDoc,
        "MyQuery",
        {}
    );
}