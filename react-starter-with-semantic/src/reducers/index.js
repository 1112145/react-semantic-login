import { combineReducers } from 'redux';
import { authentication } from './authenticate.reducer';

const rootReducer = combineReducers({
    authentication: authentication
})

export default rootReducer;