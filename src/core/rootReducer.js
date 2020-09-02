import { combineReducers } from 'redux';
import productReducer from '../features/products/store/reducer';
import { errorReducer } from '../features/products/store/errorReducer';
import {pageReducer} from "../features/products/store/pageReducer";

const rootReducer = combineReducers({
  productState: productReducer,
  httpErrors: errorReducer,
  pageState: pageReducer
});

export default rootReducer;
