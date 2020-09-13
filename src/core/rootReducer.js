import { combineReducers } from 'redux';
import productReducer from '../features/products/store/reducers/reducer';
import { errorReducer } from '../features/products/store/reducers/errorReducer';
import { pageReducer } from '../features/products/store/reducers/pageReducer';
import { modalReducer } from '../features/products/store/reducers/modReducer';

const rootReducer = combineReducers({
  productState: productReducer,
  httpErrors: errorReducer,
  pageState: pageReducer,
  modalState: modalReducer,
});

export default rootReducer;
