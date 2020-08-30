import { combineReducers } from 'redux';
import productReducer from '../features/products/store/reducer';
import { errorReducer } from '../features/products/store/errorReducer';

const rootReducer = combineReducers({
  productState: productReducer,
  httpErrors: errorReducer,
});

export default rootReducer;
