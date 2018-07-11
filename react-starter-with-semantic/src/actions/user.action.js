import { user_constant } from "../constant";

export const loginSuccess = (payload) => {
    return {
        type: user_constant.LOGIN_SUCCESS,
        payload
    }
}