import { selector, atomFamily, selectorFamily } from 'recoil';
import _ from 'lodash';

const getQuizzes = selector({
    key: 'fetchQuizzes',
    get: async () => {
        const { errors, data } = await fetchMyQuery();    
        if (errors) {
            console.error("errors", errors);
        }
        return data
    }
});

const quizzesState = atomFamily({
    key: 'quizzesState',
    default: selectorFamily({
      key: 'quizzes/Default',
      get: (attribute) => ({get}) => {
        const dbValues = get(getQuizzes);
        return _.get(dbValues, attribute);
      },
    })
});
  
export {
    getQuizzes,
    quizzesState,
}

const operationsDoc = `
    query MyQuery {
        quizzes {
            name
            id
            questions {
                id
                answer
                options
                text
            }
        }
    }`;

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
    
function fetchMyQuery() {
    return fetchGraphQL(
        operationsDoc,
        "MyQuery",
        {}
    );
}