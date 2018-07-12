import { createStore } from 'redux';
import rootReducer from './reducers';

export const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);