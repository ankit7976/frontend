import axios from "../helpers"
import { getcategoryConstant } from "./constants";

export const getAllCategory = ()=>{
    return async (dispatch)=>{

        dispatch({type:getcategoryConstant.GET_ALL_CATEGORY_REQUEST})
        const res = await axios.get('/category/getcategory');

        if(res.status === 201){
            const {categoryList} = res.data;
            dispatch({
                type:getcategoryConstant.GET_ALL_CATEGORY_SUCCESS,
                payload : {
                    categories : categoryList,
                }
            })
        }else{
            dispatch({
                type:getcategoryConstant.GET_ALL_CATEGORY_FAILURE,
                payload : {
                    error : res.data.error 
                }
            })
        }
    }
} 

 