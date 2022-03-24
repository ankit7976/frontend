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

    }
}


export default (state=initalState,action)=>{
    switch(action.type){
        case cartConstants.ADD_TO_CART:
            state ={
                ...state,
                cartItems:action.payload.cartItems
            }
            break;
    }
    return state
}