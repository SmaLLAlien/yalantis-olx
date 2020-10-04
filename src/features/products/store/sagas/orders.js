import { takeEvery, put } from 'redux-saga/effects';
import {
  LOAD_ORDER_FROM_SERVER,
  LOAD_ORDERS_FROM_SERVER,
  ORDER_CREATED,
} from '../actionsTypes';
import { URLs } from '../../../../global/constants';
import {
  fetchOrderError,
  fetchOrdersError,
  fetchOrdersSuccess,
  fetchOrderSuccess,
  orderLoaded,
  ordersLoaded,
  postOrderError,
  postOrderSuccess,
  removeOrdered,
} from '../actions/orders';
import { productAuthInstanceApi } from '../../../../core/api';
import { normalizeOrders } from '../../../../helpers/helpers';

function* fetchOrders() {
  try {
    const { data } = yield productAuthInstanceApi.get(URLs.ORDER);
    yield put(fetchOrdersSuccess());
    yield put(ordersLoaded(data.items));
  } catch (error) {
    if (error.message) {
      yield put(fetchOrdersError(error.message));
    } else {
      yield put(fetchOrdersError('Something is wrong, please try again later'));
    }
  }
}

function* fetchOrder({ id }) {
  try {
    const { data } = yield productAuthInstanceApi.get(`${URLs.ORDER}/${id}`);
    yield put(fetchOrderSuccess());
    yield put(orderLoaded(data));
  } catch (error) {
    if (error.message) {
      yield put(fetchOrderError(error.message));
    } else {
      yield put(fetchOrderError('Something is wrong, please try again later'));
    }
  }
}

function* orderProduct({ products }) {
  try {
    const pieces = yield normalizeOrders(products);
    const order = { pieces };
    yield productAuthInstanceApi.post(URLs.ORDER, { order });
    yield put(postOrderSuccess());
    yield put(removeOrdered(products));
  } catch (error) {
    if (error.message) {
      yield put(postOrderError(error.message));
    } else {
      yield put(postOrderError('Something is wrong, please try again later'));
    }
  }
}

export default function* watcherOrdersSaga() {
  yield takeEvery(LOAD_ORDERS_FROM_SERVER, fetchOrders);
  yield takeEvery(LOAD_ORDER_FROM_SERVER, fetchOrder);
  yield takeEvery(ORDER_CREATED, orderProduct);
}
