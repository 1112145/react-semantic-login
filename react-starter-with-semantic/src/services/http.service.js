
import { store } from '../store';
import { loading, loaded } from '../actions/app.action';

export const makeRequest = (promise) => {
    store.dispatch(loading());
    promise.then(() => { store.dispatch(loaded()) }).catch(() => { store.dispatch(loaded()) });
    return promise;
}