import {saveQuestion} from '../../utils/api';
import { addQuestionUser } from './users';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleAddQuestion = (rawQuestion) =>{
    return (dispatch,getState) => saveQuestion(rawQuestion)
        .then((question)=>{
            dispatch(addQuestion(question));
            const {authUser} = getState();
            dispatch(addQuestionUser(authUser,question.id))
        })
}