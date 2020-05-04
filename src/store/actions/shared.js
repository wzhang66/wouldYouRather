import {getInitialData} from '../../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {setAuthUser} from './AuthUser';
import {showLoading,hideLoading} from 'react-redux-loading-bar';


// fake Id for the testing first
const AUTHED_ID = "sarahedo";

export const handleInitialData = () => {
    return(dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}