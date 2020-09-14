import {
  DECREASE_CHOSEN,
  INCREASE_CHOSEN,
  PRODUCT_CHOSEN,
  PRODUCT_DETAIL_LOADED,
  PRODUCTS_LOADED,
  LOADING_FAILED,
  LOADING_SUCCEEDED,
  LOADING,
  ORIGINS_LOADED,
  ORIGINS_CHECKED,
  BASKET_PRODUCT_DELETED,
  PER_PAGE_CHANGED,
  PAGE_CHANGED,
  TOTAL_ITEMS_CHANGED,
  GOT_ORIGINS_FROM_URL,
  OPEN_CREATE_PRODUCT,
  CLOSE_CREATE_PRODUCT,
  SAVE_PRODUCT_ERROR,
  SAVE_PRODUCT_SUCCESS,
  RESET_ORIGIN, ORDERED, ORDERS_LOADED, RESET_PER_PAGE, RESET_PAGE,
} from './actionsTypes';
import { URLs } from '../../../global/constants';
import {
  changePiecesCount,
  countPrice, normalizeOrders,
  normalizeOrigins,
  onProductChosen,
} from '../../../helpers/helpers';

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

export const originsLoaded = (payload) => {
  return {
    type: ORIGINS_LOADED,
    payload,
  };
};

export const pageChanged = (payload) => {
  return {
    type: PAGE_CHANGED,
    payload,
  };
};

export const perPageChanged = (payload) => {
  return {
    type: PER_PAGE_CHANGED,
    payload,
  };
};

export const totalItemsChanged = (payload) => {
  return {
    type: TOTAL_ITEMS_CHANGED,
    payload,
  };
};

export const openCreateProduct = () => {
  return {
    type: OPEN_CREATE_PRODUCT,
  };
};

export const closeCreateProduct = () => {
  return {
    type: CLOSE_CREATE_PRODUCT,
  };
};

export const saveProductError = (payload) => {
  return {
    type: SAVE_PRODUCT_ERROR,
    payload,
  };
};

export const saveProductSuccess = () => {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  };
};

export const resetOrigin = () => (dispatch) => {
  dispatch({ type: RESET_ORIGIN });
};

export const resetPerPage = () => (dispatch) => {
  dispatch({ type: RESET_PER_PAGE });
};

export const resetPage = () => (dispatch) => {
  dispatch({ type: RESET_PAGE });
};

export const removeOrdered = payload => {
  return {
    type: ORDERED,
    payload
  }
}

export const ordersLoaded = payload => {
  return {
    type: ORDERS_LOADED,
    payload
  }
}

export const fetchProducts = (searchParams) => async (dispatch, state, api) => {
  try {
    let headers;
    if (searchParams && searchParams.includes('editable')) {
      headers = { Authorization: process.env.REACT_APP_TOKEN };
    }
    const { data } = await api.get(`${URLs.PRODUCTS}/${searchParams}`, {
      headers,
    });

    dispatch(loadingSucceeded());
    dispatch(totalItemsChanged(data.totalItems));
    dispatch(perPageChanged(data.perPage));
    dispatch(pageChanged(data.page));
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
    const headers = { Authorization: process.env.REACT_APP_TOKEN };
    const { data } = await api.get(`${URLs.PRODUCTS}/${id}`, { headers });
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

export const fetchOrigins = () => async (dispatch, getState, api) => {
  dispatch(loading());
  try {
    const { data } = await api.get(URLs.ORIGINS);
    dispatch(loadingSucceeded());

    let items = normalizeOrigins(data.items);

    const searchValues = getState().pageState.originUrlState;
    items = items.map((origin) => {
      if (searchValues.indexOf(origin.value) !== -1) {
        const temp = { ...origin };
        temp.checked = true;
        return temp;
      }
      return origin;
    });

    return dispatch(originsLoaded(items));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

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

export const manageOrigins = (payload) => (dispatch) => {
  dispatch({ type: ORIGINS_CHECKED, payload });
};

export const deleteProductFromBasket = (payload) => (dispatch, getState) => {
  const {
    productState: { purchasing },
  } = getState();
  const temp = purchasing.filter((product) => product.id !== payload);
  const price = countPrice(temp);
  const newPayload = { purchasing: temp, price };

  dispatch({ type: BASKET_PRODUCT_DELETED, payload: newPayload });
};

export const setOriginQueryToStore = (payload) => (dispatch) => {
  if (!payload.length) {
    dispatch({ type: RESET_ORIGIN });
  }
  dispatch({ type: GOT_ORIGINS_FROM_URL, payload });
};

export const openCreateModal = () => (dispatch) => {
  dispatch(openCreateProduct());
};

export const closeCreateModal = () => (dispatch) => {
  dispatch(closeCreateProduct());
  dispatch(saveProductSuccess());
};

export const saveProduct = (product, isUserPage) => async (
  dispatch,
  _,
  api,
) => {
  try {
    const headers = { Authorization: process.env.REACT_APP_TOKEN };
    await api.post(URLs.PRODUCTS, { product }, { headers });
    dispatch(fetchProducts(isUserPage));
    dispatch(saveProductSuccess());
    return dispatch(closeCreateProduct());
  } catch (error) {
    if (error.message) {
      return dispatch(saveProductError(error.message));
    }
    return dispatch(
      saveProductError('Something is wrong, please try again later'),
    );
  }
};

export const editProduct = (product, history) => async (dispatch, _, api) => {
  try {
    const headers = { Authorization: process.env.REACT_APP_TOKEN };
    await api.patch(`${URLs.PRODUCTS}/${product.id}`, { product }, { headers });
    history.goBack();
    return dispatch(saveProductSuccess());
  } catch (error) {
    if (error.message) {
      return dispatch(saveProductError(error.message));
    }
    return dispatch(
      saveProductError('Something is wrong, please try again later'),
    );
  }
};

export const order = (products) => async (dispatch, _, api) => {
  try {
    const headers = { Authorization: process.env.REACT_APP_TOKEN };
    const pieces = normalizeOrders(products);
    const order = {pieces}
    await api.post(URLs.ORDER, {order}, {headers});
    return dispatch(removeOrdered(products));
  } catch(error) {

  }
}

export const fetchOrders = () => async (dispatch, _, api) =>{
  try {
    const headers = { Authorization: process.env.REACT_APP_TOKEN };
    const {data} = await api.get(URLs.ORDER, {headers});
    return dispatch(ordersLoaded(data.items));
  } catch (error) {

  }
}
