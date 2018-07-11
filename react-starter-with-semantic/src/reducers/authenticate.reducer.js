import { userConstant } from "../constant";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

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
        default:
            return state
    }
}