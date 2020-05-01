import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import logger from './looger';

export default applyMiddleware(
    thunk,
    logger
);