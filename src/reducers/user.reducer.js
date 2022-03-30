import { userConstants } from "../actions/constants"

const initalState = {
    address: [],
    error: null,
    loading: false
}


export default (state = initalState, action) => {
    console.log(action.type)
    switch (action.type) {
        case userConstants.GET_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.GET_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address:action.payload.address,
                loading:false
            }
            break;
        case userConstants.GET_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                loading:false,
             
            }
    }
    return state;
}