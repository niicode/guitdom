import {combineReducers} from 'redux';
import user from './user_reducer.js';

const rootReducer = combineReducers({
    user
});

export default rootReducer