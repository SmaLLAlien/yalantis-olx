import {takeEvery, put, delay, takeLatest} from 'redux-saga/effects'
import {Routes, TOKEN, URLs} from "../../../../global/constants";
import {
  closeCreateProduct,
  loading,
  loadingFailed,
  loadingSucceeded,
  pageChanged,
  perPageChanged, productDetailLoaded,
  productsLoaded,
  saveProductError,
  saveProductSuccess,
  savingProductFinished,
  savingProductStarts,
  totalItemsChanged
} from "../actions";
import productInstanceApi from "../../../../core/api";
import {
  CALL_SAVE_EDITED_PRODUCT,
  CALL_SAVE_PRODUCT,
  PRODUCT_DETAIL_REQUESTED,
  PRODUCTS_REQUESTED
} from "../actionsTypes";

export default function* watcherProductsSaga() {
  yield takeEvery(CALL_SAVE_PRODUCT, saveProduct);
  yield takeLatest(PRODUCTS_REQUESTED, checkDebounce);
  yield takeEvery(PRODUCT_DETAIL_REQUESTED, fetchProduct);
  yield takeEvery(CALL_SAVE_EDITED_PRODUCT, editProduct);
}

function* saveProduct({product, isUserPage, history}) {
  try {
    yield put(savingProductStarts());
    const headers = { Authorization: TOKEN };
    yield productInstanceApi.post(URLs.PRODUCTS, { product }, { headers });
    // yield fetchProducts({searchParams: isUserPage});
    yield history.push(Routes.CREATED);
    yield put(saveProductSuccess());
    yield put(savingProductFinished());
    yield put(closeCreateProduct());
  } catch (error) {
    yield put(savingProductFinished());
    if (error.response.data.error.message) {
      yield put(saveProductError(error.response.data.error.message));
    } else {
      yield put(
        saveProductError('Something is wrong, please try again later'),
      );
    }
  }
}

function* fetchProducts({searchParams}) {
  console.log(searchParams, 'searchParams222');
  try {
    let headers;
    if (searchParams && searchParams.includes('editable')) {
      headers = { Authorization: TOKEN };
    }
    const { data } = yield productInstanceApi.get(`${URLs.PRODUCTS}/${searchParams}`, {
      headers,
    });

    yield put(loadingSucceeded());
    yield put(totalItemsChanged(data.totalItems));
    yield put(perPageChanged(data.perPage));
    yield put(pageChanged(data.page));
    yield put(productsLoaded(data.items));
  } catch (error) {
    if (error.message) {
      yield put(loadingFailed(error.message));
    } else {
      yield put(
        loadingFailed('Something is wrong, please try again later'),
      );
    }
  }
}

function* fetchProduct({id}) {
  yield put(loading());
  try {
    const headers = { Authorization: TOKEN };
    const { data } = yield productInstanceApi.get(`${URLs.PRODUCTS}/${id}`, { headers });
    yield put(loadingSucceeded());
    yield put(productDetailLoaded(data));
  } catch (error) {
    if (error.message) {
      yield put(loadingFailed(error.message));
    } else {
      yield put(
        loadingFailed('Something is wrong, please try again later'),
      );
    }
  }
}

function* editProduct({product, history}) {
  try {
    yield put(savingProductStarts());
    const headers = { Authorization: TOKEN };
    yield productInstanceApi.patch(`${URLs.PRODUCTS}/${product.id}`, { product }, { headers });
    yield put(savingProductFinished());
    yield history.goBack();
    yield put(saveProductSuccess());
  } catch (error) {
    yield put(savingProductFinished());
    if (error.response.data.error.message) {
      yield put(saveProductError(error.response.data.error.message));
    } else {
      yield put(
        saveProductError('Something is wrong, please try again later'),
      );
    }
  }
}

function* checkDebounce({searchParams}) {
  if (searchParams && searchParams !== '?editable=true') {
    yield delay(500);
    yield fetchProducts({searchParams});
  } else {
    yield fetchProducts({searchParams});
  }
}
