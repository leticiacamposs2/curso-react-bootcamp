import { clickReducer } from './clickReducer';
import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
    clickState: clickReducer,
    otherState: otherReducer
});

export default Reducers;