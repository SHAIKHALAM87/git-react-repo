import {react, useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { FETCH_USERS } from "../Actions/Useractions";
import UserList from "../Component/userlist";


const FakeapiFetch = ()=>{

    const dispatch = useDispatch();

    const fetchApiReq = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/users") 
        .catch((err)=>{
            console.log('Error',err);
        });
        console.log(response);
        dispatch(FETCH_USERS(response));
        
    }

    useEffect(() => {
        fetchApiReq();
    }, []);

    return(
        <>
            <h1> THIS IS FETCH FAKE API </h1>
            <UserList/>
        </>
    );
}

export default FakeapiFetch;