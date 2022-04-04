import axios from '../helpers'
import { cartConstants, userConstants } from './constants';


export const getAddress = () => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/user/getAddress');
            dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST })
            
            if (res.status === 200) {
                const {
                    userAddress: { address }
                } = res.data

                console.log('address =>' .address)
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: { address }
                })
            } else {
                const { error } = res.data ;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const addAddress = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/user/address/create', {payload})
            dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST })
            if (res.status === 201) {
                dispatch({type:userConstants.ADD_USER_ADDRESS_SUCCESS})
                console.log(res)
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/addOrder', payload)
            dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST })
            if (res.status === 201) {
               dispatch({type:cartConstants.RESET_CART})
                console.log(res)
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const getOrders = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/getOrders')
            dispatch({ type: userConstants.GET_USER_ORDER_REQUEST })
            if (res.status === 200) {
                const { orders } = res.data;
                console.log(res)
                dispatch({ 
                    type: userConstants.GET_USER_ORDER_SUCCESS,
                    payload:{orders}
                 })
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const getOrder = (payload) => {
    return async (dispatch) => {
        try {
               dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST })
            const res = await axios.post('/getOrder', payload)
         
            if (res.status === 200) {
                const { order } = res.data;
               
                dispatch({ 
                    type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
                    payload:{order}
                 })
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}