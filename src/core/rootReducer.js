import {combineReducers} from "redux";
import productReducer from "../features/products/store/reducer";

const rootReducer = combineReducers({
  productState: productReducer,
})

export default rootReducer;
