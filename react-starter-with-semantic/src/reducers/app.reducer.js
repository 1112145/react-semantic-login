import { appConstant } from "../constant";

const initialState = {}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appConstant.LOADING:
            return {
                isLoading: true,
                isLoaded: false
            }
        case appConstant.LOADED:
            return {
                isLoading: false,
                isLoaded: true
            }
        default:
            return state;
    }
} 