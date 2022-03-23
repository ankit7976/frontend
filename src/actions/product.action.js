import axios from "../helpers"
import { getProductSlugConstant } from "./constants";

export const getProductBySlug = (slug) => {
    return async dispatch => {

        const res = await axios.get(`product/${slug}`)

        if (res.status == 201) {
            dispatch({
                type: getProductSlugConstant.GET_PRODUCT_BYSLUG_SUCCESS,
                payload: res.data

            })
        }

    }
}


export const getProductPage = (payload) => {
    return async dispatch => {

        try {

            const { cid, type } = payload.param;
            const res = await axios.get(`page/${cid}/${type}`)
            console.log(res)
            dispatch({ type: getProductSlugConstant.GET_PRODUCT_PAGE_REQUEST })
            if (res.status === 201) {
                console.log(res)
                const { page } = res.data;
                dispatch({
                    type: getProductSlugConstant.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                })
            } else {
                const { error } = res.data;
                dispatch({
                    type: getProductSlugConstant.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                })
            }

        } catch(error) {
            console.log(error)
        }
    }
}




export const getProductDetailsById = (payload)=>{
    return async dispatch =>{
        dispatch({type:getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST})
        let res;
        try {
            const {productId} = payload;
            res = await axios.post(`/product/${productId}`);
           
            dispatch({
                type:getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload:{productDetails:res.data.product}
            })
        }catch(error){
            console.log(error)
            dispatch({
                type:getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
}
