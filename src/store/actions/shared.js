import {getInitialData} from '../../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {setAuthUser} from './AuthUser';

// fake Id for the testing first
const AUTHED_ID = "sarahedo";

export const handleInitialData = () => {
    return(dispatch) => {
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthUser(AUTHED_ID));
            })
    }
}