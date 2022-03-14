import { getProductSlugConstant } from "../actions/constants";


const initalState = {
    products : [],
    productByPrice : {
        under5k:[],
        under10k:[],
        under15k:[],
        under20k:[],
        under30k:[],
    }
}

 
export default (state = initalState, action)=>{
    switch(action.type){
      
        case getProductSlugConstant.GET_PRODUCT_BYSLUG_SUCCESS : state = {
            ...state,
            products: action.payload.product,
            productByPrice:{
                ...action.payload.productByPrice
            }
             
            
        }
        break;
       
   
    }
    return state
}