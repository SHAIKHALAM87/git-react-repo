import { USERS_FETCH_SUCCESS } from "../ActionTypes/actiontypes";

export const FETCH_USERS = (fetchuserdata)=>{
    return{
        type:USERS_FETCH_SUCCESS,
        payload:fetchuserdata
    }

}