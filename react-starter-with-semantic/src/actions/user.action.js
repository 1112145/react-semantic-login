import { userConstant } from "../constant";

export const loginSuccess = (payload) => {
    return {
        type: userConstant.LOGIN_SUCCESS,
        payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: userConstant.LOGIN_FAILURE,
        payload
    }
}

export const logout = () => {
    return {
        type: userConstant.LOGOUT
    }
}