import { combineReducers } from 'redux';
import productReducer from '../features/products/store/reducers/reducer';
import { errorReducer } from '../features/products/store/reducers/errorReducer';
import { pageReducer } from '../features/products/store/reducers/pageReducer';
import { modalReducer } from '../features/products/store/reducers/modReducer';
import ordersReducer from '../features/products/store/reducers/ordersReducer';
import spinnerReducer from "../store/reducers/spinnerReducer";

const rootReducer = combineReducers({
  productState: productReducer,
  httpErrors: errorReducer,
  pageState: pageReducer,
  modalState: modalReducer,
  orderState: ordersReducer,
  spinnerState: spinnerReducer
});

export default rootReducer;
