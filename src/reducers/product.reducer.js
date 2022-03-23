import { getProductSlugConstant } from "../actions/constants";


const initalState = {
    products : [],
    productByPrice : {
        under5k:[],
        under10k:[],
        under15k:[],
        under20k:[],
        under30k:[],
    } ,
    pageRequest:false,
    page:{},
    error:null,
    productDetails:{},
    loading:false
}

 
export default (state = initalState, action)=>{
     console.log(action)
    switch(action.type){
      
        case getProductSlugConstant.GET_PRODUCT_BYSLUG_SUCCESS : state = {
            ...state,
            products: action.payload.products,
            productByPrice:{
                ...action.payload.productByPrice
            }
        }
        break;
        
        case getProductSlugConstant.GET_PRODUCT_PAGE_REQUEST : state = {
            ...state,
            pageRequest:true
        }
        break;
        
        case getProductSlugConstant.GET_PRODUCT_PAGE_SUCCESS : state = {
 
            ...state,
            page:action.payload.page,
            pageRequest:false
        }
        break;
        
        case getProductSlugConstant.GET_PRODUCT_PAGE_FAILURE : state = {
            ...state,
           pageRequest:false ,
           error:action.payload.error
           
        }
        break;


        case getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST : state = {
            ...state,
            loading:true
        }
        break;
        
        case getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS : state = {
 
            ...state,
            productDetails:action.payload.productDetails,
           loading:false
        }
        break;
        
        case getProductSlugConstant.GET_PRODUCT_DETAILS_BY_ID_FAILURE : state = {
            ...state,
           loading:false,
           error:action.payload.error
           
        }
        break;
       
   
    }
    return state
}