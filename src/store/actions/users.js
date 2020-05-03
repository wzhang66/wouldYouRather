export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const addQuestionUser = (author,qid) => {
    return {
        type:ADD_QUESTION_USER,
        author,
        qid
    }
}