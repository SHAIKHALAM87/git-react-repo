import {react, useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { FETCH_PRODUCT } from "../Actions/Productactions";


const ProductFakeapiFetch = ()=>{

    const dispatch = useDispatch();

    const fetchApiReq = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products") 
        .catch((err)=>{
            console.log('Error',err);
        });
        console.log(response);
        dispatch(FETCH_PRODUCT(response));
        
    }

    useEffect(() => {
        fetchApiReq();
    }, []);

    return(
        <>
            <h1> THIS IS FETCH FAKE API </h1>
        </>
    );
}

export default ProductFakeapiFetch;