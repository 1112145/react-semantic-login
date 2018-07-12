import { appConstant } from "../constant";

export const loading = () => {
    return { type: appConstant.LOADING }
}

export const loaded = () => {
    return { type: appConstant.LOADED }
}