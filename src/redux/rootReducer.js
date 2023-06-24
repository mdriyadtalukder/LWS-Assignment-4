import filterReducer from "./filters/filterReducer";
import productReducer from "./product/productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    products: productReducer,
    filters: filterReducer,
})
export default rootReducer;