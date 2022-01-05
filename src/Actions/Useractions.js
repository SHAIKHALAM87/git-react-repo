import { USERS_FETCH_SUCCESS } from "../ActionTypes/actiontypes";
import axios from "axios";

export const FETCH_USERS = (fetchuserdata)=>{
    return{
        type:USERS_FETCH_SUCCESS,
        payload:fetchuserdata
    }

}