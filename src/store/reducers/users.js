import {RECEIVE_USERS,ADD_QUESTION_USER,SAVE_ANSWER_USER} from '../actions/users';

const users = (state={},action) => {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.author]:{
                    ...state[action.author],
                    questions:state[action.author].questions.concat(action.qid)
                }
            }
        case SAVE_ANSWER_USER:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state
    }
}

export default users;