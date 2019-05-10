import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';

const rootReducer = combineReducers({
    firstReducer,
    secondReducer,
});

export default rootReducer;
