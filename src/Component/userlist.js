import {react, useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";



const UserList = ()=>{

    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.allUsers.userData.data);
	const islogged = useSelector((state) => state.allUsers.loggedIn);
	
	console.log(userdata);
	console.log(islogged);

    let renderlist;
    if(islogged){

    renderlist = userdata.map((user)=>{
        const {id,username} = user;
        return(
            <li key={id}>{username}</li>
        );

    });

    }

    return(
        <>
            {islogged && renderlist}
        </>
    );
}

export default UserList;