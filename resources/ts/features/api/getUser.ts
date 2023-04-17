import { get } from "./request";
import { API_FAILED, API_SUCCESS } from "../../constants";

export const getUser = async() => {
    try {
        const response = await get('api/user');
        return {response, apiResult: API_SUCCESS};
    } catch (error) {
        console.error('getUser request FAILED ', error);
        return {apiResult: API_FAILED}
    }
}