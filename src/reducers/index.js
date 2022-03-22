import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    product: productReducer

})

export default rootReducer