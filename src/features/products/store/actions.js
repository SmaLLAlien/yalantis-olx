import {
  DECREASE_CHOSEN,
  INCREASE_CHOSEN,
  PRODUCT_CHOSEN,
  PRODUCT_DETAIL_LOADED,
  PRODUCTS_LOADED,
  LOADING_FAILED,
  LOADING_SUCCEEDED,
  LOADING, ORIGINS_LOADED, ORIGINS_CHECKED,
} from './actionsTypes';
import { URLs } from '../../../global/constants';
import {changePiecesCount, normalizeOrigins, onProductChosen} from '../../../helpers/helpers';

export const productsLoaded = (payload) => {
  return {
    type: PRODUCTS_LOADED,
    payload,
  };
};

export const loadingFailed = (payload) => {
  return {
    type: LOADING_FAILED,
    payload,
  };
};

export const loadingSucceeded = () => {
  return {
    type: LOADING_SUCCEEDED,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const productChosen = (payload) => {
  return {
    type: PRODUCT_CHOSEN,
    payload,
  };
};

export const increaseChosen = (payload) => {
  return {
    type: INCREASE_CHOSEN,
    payload,
  };
};

export const decreaseChosen = (payload) => {
  return {
    type: DECREASE_CHOSEN,
    payload,
  };
};

export const productDetailLoaded = (payload) => {
  return {
    type: PRODUCT_DETAIL_LOADED,
    payload,
  };
};

export const originsLoaded = payload => {
  return {
    type: ORIGINS_LOADED,
    payload
  }
}

export const fetchProducts = (originsIds) => async (dispatch, state, api) => {

  const value = originsIds ? originsIds.split('.').join(',') : null;
  const params = {
    origins: value,
  };
  try {
    const { data } = await api.get(URLs.PRODUCTS, {params});
    dispatch(loadingSucceeded());
    return dispatch(productsLoaded(data.items));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

export const fetchProduct = (id) => async (dispatch, _, api) => {
  dispatch(loading());
  try {
    const { data } = await api.get(`${URLs.PRODUCTS}/${id}`);
    dispatch(loadingSucceeded());
    return dispatch(productDetailLoaded(data));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

export const fetchOrigins = (searchValues) => async (dispatch, _, api) => {
  console.log(searchValues, 'fetchOrigins');
  dispatch(loading());
  try {
    let {data} = await api.get(URLs.ORIGINS);
    let items = [...data.items];
    dispatch(loadingSucceeded());

    items = normalizeOrigins(data.items);

    items = items.map(origin => {
      if (searchValues.indexOf(origin.value) !== -1 ) {
        origin.checked = true;
        return origin;
      }
      return origin;
    })
    console.log(items, 'ITEMS')
    return dispatch(originsLoaded(items));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
}

export const onAddToBasketProduct = (product, purchasing) => (dispatch) => {
  const payload = onProductChosen(product, purchasing);
  dispatch(productChosen(payload));
};

export const decreaseProductPieces = (id, purchasedProducts) => (dispatch) => {
  const payload = changePiecesCount(id, purchasedProducts, '-');
  dispatch(decreaseChosen(payload));
};

export const increaseProductPieces = (id, purchasedProducts) => (dispatch) => {
  const payload = changePiecesCount(id, purchasedProducts, '+');
  dispatch(increaseChosen(payload));
};

export const manageOrigins = (payload) => dispatch => {
  console.log(payload);
  dispatch({type: ORIGINS_CHECKED, payload})
}

