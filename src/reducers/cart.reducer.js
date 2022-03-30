import { cartConstants } from "../actions/constants"

const initalState = {
    cartItems : {
        // 123:{
        //     id:123,
        //     name:"Samsung Mobile",
        //     img:'item.png',
        //     price:200,
        //     oty:1 
        // }

    },
    updatingCart : false,
    error:null
}


export default (state=initalState,action)=>{
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state ={
                ...state,
               updatingCart:true
            }
            break;
            
            case cartConstants.ADD_TO_CART_SUCCESS : 
            state = {
                ...state,
                cartItems:action.payload.cartItems,
                updatingCart:false
            }
            break;
            case cartConstants.ADD_TO_CART_FAILURE : state ={
                ...state,
                updatingCart:false,
                error:action.payload.error
            }
            break;
            case cartConstants.RESET_CART: state = {
                ...initalState
            }
    }
    return state
}