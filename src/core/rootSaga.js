import { all } from 'redux-saga/effects';
import watcherOrdersSaga from "../features/products/store/sagas/orders";

export default function* rootSaga() {
  yield all([(watcherOrdersSaga())]);
}
