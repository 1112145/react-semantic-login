import { userConstant, localStorageConstant } from "../constant";

const user = JSON.parse(localStorage.getItem(localStorageConstant.USER));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case userConstant.LOGIN_FAILURE:
            return {
                loggedIn: true,
                error: action.payload
            };
        case userConstant.REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case userConstant.REGISTER_FAILURE:
            return {
                loggedIn: true,
                error: action.payload
            };
        case userConstant.LOGOUT:
            localStorage.removeItem(localStorageConstant.USER);
            return {
                loggedIn: false,
                error: action.payload
            };
        default:
            return state
    }
}