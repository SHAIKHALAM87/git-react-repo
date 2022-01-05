import { USERS_FETCH_SUCCESS,PRODUCT_FETCH_SUCCESS,CART_FETCH_SUCCESS } from "../ActionTypes/actiontypes";

const initState = {
    loggedIn: false,
    userData: {}
  };

const UserFetch = (state=initState,action)=>{
      switch(action.type){
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                loggedIn:true,
                userData: action.payload
            }
        case PRODUCT_FETCH_SUCCESS:
            return{
                ...state,
                loggedIn:true,
                userData: action.payload
            }
        case CART_FETCH_SUCCESS:
            return{
                ...state,
                loggedIn:true,
                userData: action.payload
            }
        default:
            return state;
      }

  }

  export default UserFetch;