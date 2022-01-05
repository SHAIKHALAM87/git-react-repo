import { combineReducers } from "redux";
import UserFetch from "./Fetchreduces";

export const reducers = combineReducers({
    allUsers: UserFetch
})