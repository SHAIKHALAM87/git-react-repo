import { PRODUCT_FETCH_SUCCESS } from "../ActionTypes/actiontypes";
import axios from "axios";

export const FETCH_PRODUCT = (fetchuserdata)=>{
    return{
        type:PRODUCT_FETCH_SUCCESS,
        payload:fetchuserdata
    }

}