import { PRODUCT_FETCH_SUCCESS } from "../ActionTypes/actiontypes";

export const FETCH_PRODUCT = (fetchuserdata)=>{
    return{
        type:PRODUCT_FETCH_SUCCESS,
        payload:fetchuserdata
    }

}