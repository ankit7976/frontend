 
import axios from "../helpers";
import { authConstants, cartConstants } from "./constants";



// test Github Account Sakshi

export const login = (user)=>{
    console.log(user)
    return async (dispatch) =>{
        dispatch({type:authConstants.LOGIN_REQUEST})
       const res = await axios.post('signin',{
           ...user
       })

       if(res.status === 200){
        const {token,user} = res.data;
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
        dispatch({
            type:authConstants.LOGIN_SUCCESS,
            payload :{
                token,user
            }
        })
        return true;
       }else{
        dispatch({
            type:authConstants.LOGIN_FAILURE,
            payload :{
               error : res.data.error
            }
        })
       }
      
    }
}


export const isUserLoggedIn = ()=>{
    return async dispatch =>{

        const token = localStorage.getItem('token');
      if(token){
          const user = JSON.parse(localStorage.getItem('user'))
        dispatch({
            type:authConstants.LOGIN_SUCCESS,
            payload :{
                token,user
            }
        })
      }else{
        dispatch({
            type:authConstants.LOGIN_FAILURE,
            payload :{
               error : "Faild to login"
            }
        })
      }
    }
}


export const signout = () => {
    return async (dispatch) => {
      
        dispatch({
            type:authConstants.LOGOUT_REQUEST,
        });
       localStorage.clear()
        dispatch({
            type:authConstants.LOGOUT_SUCCESS,
        });
        dispatch({
            type:cartConstants.RESET_CART,
        });
    // const res = await axios.post('/admin/signout');
    // localStorage.clear()
    // if(res.status === 201){
    //     dispatch({
    //         type:authConstants.LOGOUT_SUCCESS,
    //     });
    // }else{
    //     dispatch({
    //         type:authConstants.LOGOUT_FAILURE,
    //         payload : {error : res.data.error}
    //     });
    // }


    }
}




export const Signup = (user)=>{
    console.log(user)
    return async (dispatch) =>{
        dispatch({type:authConstants.LOGIN_REQUEST})
       const res = await axios.post('signup', user)

       if(res.status === 201){
        const {user} = res.data;
        console.log(user)
        return true;
       
       }else{
        const {error} = res.data;
        console.log(error)
       }
      
    }
}