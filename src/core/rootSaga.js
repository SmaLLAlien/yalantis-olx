import { all } from 'redux-saga/effects';
import watcherOrdersSaga from '../features/products/store/sagas/orders';
import watcherProductsSaga from '../features/products/store/sagas/products';
import watcherOrigins from '../features/products/store/sagas/origins';

export default function* rootSaga() {
  yield all([watcherOrdersSaga(), watcherProductsSaga(), watcherOrigins()]);
}
