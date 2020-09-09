import { combineReducers } from 'redux';
import productReducer from '../features/products/store/reducers/reducer';
import { errorReducer } from '../features/products/store/reducers/errorReducer';
import { pageReducer } from '../features/products/store/reducers/pageReducer';

const rootReducer = combineReducers({
  productState: productReducer,
  httpErrors: errorReducer,
  pageState: pageReducer,
});

export default rootReducer;
