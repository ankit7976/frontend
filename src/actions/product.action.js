import axios from "../helpers"
import { getProductSlugConstant } from "./constants";

 export const getProductBySlug = (slug)=>{
     return async dispatch =>{
       
         const res = await axios.get(`product/${slug}`)

         if(res.status == 201){
            dispatch({type:getProductSlugConstant.GET_PRODUCT_BYSLUG_SUCCESS,
            payload: res.data
             
            })
         }
        
     }
 }
 