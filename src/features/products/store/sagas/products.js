import { takeEvery, put, delay, takeLatest } from 'redux-saga/effects';
import { URLs } from '../../../../global/constants';
import {
  closeCreateProduct,
  loading,
  loadingFailed,
  loadingSucceeded,
  pageChanged,
  perPageChanged,
  productDetailLoaded,
  productsLoaded,
  saveProductError,
  saveProductSuccess,
  savingProductFinished,
  savingProductStarts,
  totalItemsChanged,
} from '../actions/products';
import {productInstanceApi, productAuthInstanceApi} from '../../../../core/api';
import {
  CALL_SAVE_EDITED_PRODUCT,
  CALL_SAVE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_DETAIL_REQUESTED,
  PRODUCTS_REQUESTED,
} from '../actionsTypes';

function* fetchProduct({ id }) {
  yield put(loading());
  try {
    const { data } = yield productAuthInstanceApi.get(`${URLs.PRODUCTS}/${id}`);
    yield put(loadingSucceeded());
    yield put(productDetailLoaded(data));
  } catch (error) {
    if (error.message) {
      yield put(loadingFailed(error.message));
    } else {
      yield put(loadingFailed('Something is wrong, please try again later'));
    }
  }
}

function* fetchProducts({ searchParams }) {
  try {
    let data;
    if (searchParams && searchParams.includes('editable')) {
      const response = yield productAuthInstanceApi.get(
        `${URLs.PRODUCTS}/${searchParams}`);

      data = response.data;
    } else {
      const response = yield productInstanceApi.get(
        `${URLs.PRODUCTS}/${searchParams}`);

      data = response.data;
    }


    yield put(loadingSucceeded());
    yield put(totalItemsChanged(data.totalItems));
    yield put(perPageChanged(data.perPage));
    yield put(pageChanged(data.page));
    yield put(productsLoaded(data.items));
  } catch (error) {
    if (error.message) {
      yield put(loadingFailed(error.message));
    } else {
      yield put(loadingFailed('Something is wrong, please try again later'));
    }
  }
}

function* saveProduct({ product, searchParams }) {
  try {
    yield put(savingProductStarts());
    yield productAuthInstanceApi.post(URLs.PRODUCTS, { product });

    yield fetchProducts({ searchParams });
    yield put(saveProductSuccess());
    yield put(savingProductFinished());
    yield put(closeCreateProduct());
  } catch (error) {
    yield put(savingProductFinished());
    if (error.response.data.error.message) {
      yield put(saveProductError(error.response.data.error.message));
    } else {
      yield put(saveProductError('Something is wrong, please try again later'));
    }
  }
}

function* editProduct({ product, history }) {
  try {
    yield put(savingProductStarts());
    yield productAuthInstanceApi.patch(
      `${URLs.PRODUCTS}/${product.id}`,
      { product },
    );
    yield put(savingProductFinished());
    yield history.goBack();
    yield put(saveProductSuccess());
  } catch (error) {
    yield put(savingProductFinished());
    if (error.response.data.error.message) {
      yield put(saveProductError(error.response.data.error.message));
    } else {
      yield put(saveProductError('Something is wrong, please try again later'));
    }
  }
}

function* deleteProduct({ id, searchParams }) {
  yield productAuthInstanceApi.delete(`${URLs.PRODUCTS}/${id}`);
  const newSearchParams = searchParams
    ? `${searchParams}&editable=true`
    : `${searchParams}?editable=true`;
  yield fetchProducts({ searchParams: newSearchParams });
}

function* checkDebounce({ searchParams }) {
  if (searchParams && searchParams !== '?editable=true') {
    yield delay(500);
    yield fetchProducts({ searchParams });
  } else {
    yield fetchProducts({ searchParams });
  }
}

export default function* watcherProductsSaga() {
  yield takeEvery(CALL_SAVE_PRODUCT, saveProduct);
  yield takeLatest(PRODUCTS_REQUESTED, checkDebounce);
  yield takeEvery(PRODUCT_DETAIL_REQUESTED, fetchProduct);
  yield takeEvery(CALL_SAVE_EDITED_PRODUCT, editProduct);
  yield takeEvery(DELETE_PRODUCT, deleteProduct);
}
