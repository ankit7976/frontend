
import axios from '../helpers';
import store from '../store'
import { cartConstants } from './constants';



const getCartItem = () => {
    return async dispatch => {
        try {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST })
            const res = await axios.post('/user/getCartItems');
            if (res.status === 201) {
                const { cartItems } = res.data
                console.log({ getCartItem: cartItems })
                if (cartItems) {
                    dispatch({ type: cartConstants.ADD_TO_CART_SUCCESS, payload: { cartItems: cartItems } })
                }


            }
        } catch (error) {
            console.log(error)
        }
    }
}



export const addToCart = (product, newQty = 1) => {
    return async dispatch => {
        const { cart: { cartItems }, auth } = store.getState();
        // console.log('action::products',cartItems)
        const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : 1

        cartItems[product._id] = {
            ...product,
            qty
        };

        if (auth.authenticate) {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            const payload = {
                cartItems: [{
                    product: product._id,
                    quantity: qty
                },],
            };
            // console.log(payload)
            const res = await axios.post('/user/cart/addtocart', payload);
            console.log('userCart', res)
            if (res.status === 201) {
                dispatch(getCartItem())
            }

        } else {
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
        console.log("addToCart::", cartItems);

        dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems }
        })
    }
}


export const updateCart = () => {
    return async dispatch => {
        const { auth } = store.getState();
        const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null

        console.log('upppppppppp')

        if (auth.authenticate) {
            localStorage.removeItem('cart');
            if (cartItems) {
                const payload = {
                    cartItems: Object.keys(cartItems).map((key, index) => {
                        return {
                            quantity: cartItems[key].qty,
                            product: cartItems[key]._id
                        }
                    })
                };
                if (Object.keys(cartItems).length > 0) {
                    const res = await axios.post('/user/cart/addtocart', payload);
                    if (res.status === 201) {
                        dispatch(getCartItem());
                    }
                }
            }
        } else {
            if (cartItems) {
                dispatch({
                    type: cartConstants.ADD_TO_CART_SUCCESS,
                    payload: { cartItems }
                })
            }
        }




    }
}


export const removeCartItem = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type:cartConstants.REMOVE_CART_ITEM_REQUEST})
            const res = await axios.post('/user/cart/removeItem',{payload})

            if (res.status === 202) {
                dispatch({type:cartConstants.REMOVE_CART_ITEM_SUCCESS})
                dispatch(getCartItem());
            }else{
                const {error} = res.data;
                dispatch({type:cartConstants.REMOVE_CART_ITEM_SUCCESS,
                payload:{error}
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}


export {
    getCartItem
}