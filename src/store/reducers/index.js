import {combineReducers} from 'redux';

import authUser from './AuthUser';
import users from './users';
import questions from './questions';
import {loadingBarReducer} from 'react-redux-loading-bar';

export default combineReducers ({
    authUser,
    users,
    questions,
    loadingBar: loadingBarReducer
});