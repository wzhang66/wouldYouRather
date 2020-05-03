import {RECEIVE_USERS,ADD_QUESTION_USER} from '../actions/users';

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
        default :
            return state
    }
}

export default users;