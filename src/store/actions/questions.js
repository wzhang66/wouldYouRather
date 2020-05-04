import {saveQuestion,saveQuestionAnswer} from '../../utils/api';
import { addQuestionUser, saveAnswerUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

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
    return (dispatch,getState) => {
        dispatch(showLoading());
        return saveQuestion(rawQuestion)
            .then((question)=>{
            dispatch(addQuestion(question));
            const {authUser} = getState();
            dispatch(addQuestionUser(authUser,question.id));
            dispatch(hideLoading());
        })
    }
}

const saveAnswer = (authUser,qid, answer) => {
    return {
        type: SAVE_ANSWER,
        answer,
        qid,
        authUser
    }
}

export const handleSaveAnswer = (qid,answer) => {
    return (dispatch,getState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        return saveQuestionAnswer({authUser,qid,answer})
            .then(()=>{
                dispatch(saveAnswer(authUser,qid,answer));
                dispatch(saveAnswerUser(authUser,qid,answer));
                dispatch(hideLoading());                
            })
    }
}