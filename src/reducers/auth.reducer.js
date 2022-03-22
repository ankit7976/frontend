import { authConstants } from "../actions/constants"

const initalState = {
   token:null,
   user:{
       fullName: '',
       lastName: '',
       email:'',
       picture:'',
   },
   authenticate:false,
   authenticating:false,
   error:null,
   loading:false,
   message: ''
}


export default (state = initalState,action)=>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST : 
            state = {
                ...state,
                authenticating:true
            }
        break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
             break;

             case authConstants.LOGOUT_REQUEST : 
             state = {
                 ...state,
                 loading:true
             }
             break;

             case authConstants.LOGOUT_SUCCESS : 
             state = {
                 ...initalState
             }
             break;

             case authConstants.LOGOUT_FAILURE : 
             state = {
                 ...state,
                 loading:false,
                 error:action.payload.error
             }
             break;
    }
    return state;
}