import { combineReducers } from 'redux';
import { authentication } from './authenticate.reducer';
import { appReducer } from './app.reducer';

const rootReducer = combineReducers({
    authentication: authentication,
    appState: appReducer
})

export default rootReducer;