import {
  DECREASE_CHOSEN,
  INCREASE_CHOSEN,
  PRODUCT_CHOSEN,
  PRODUCT_DETAIL_LOADED,
  PRODUCTS_LOADED,
  LOADING_FAILED, LOADING_SUCCEEDED
} from "./actionsTypes";
import {URLs} from "../../../global/constants";
import {onProductChosen} from "../../../helpers/helpers";

export const productsLoaded = payload => {
  return {
    type: PRODUCTS_LOADED,
    payload
  }
}

export const loadingFailed = payload => {
  return {
    type: LOADING_FAILED,
    payload
  }
}

export const loadingSucceeded = () => {
  return {
    type: LOADING_SUCCEEDED,
  }
}

export const productChosen = payload => {
  return {
    type: PRODUCT_CHOSEN,
    payload
  }
}

export const increaseChosen = payload => {
  return {
    type: INCREASE_CHOSEN,
    payload
  }
}

export const decreaseChosen = payload => {
  return {
    type: DECREASE_CHOSEN,
    payload
  }
}

export const productDetailLoaded = (payload) => {
  return {
    type: PRODUCT_DETAIL_LOADED,
    payload
  }
}

export const fetchProducts = () => async (dispatch, state, api) => {
  try {
    const {data} = await api.get(URLs.PRODUCTS);
    dispatch(loadingSucceeded());
    return dispatch(productsLoaded(data.items));
  } catch (error) {
    if (error.message) {
      dispatch(loadingFailed(error.message))
    }
  }

};

export const fetchProduct = (id) => async (dispatch, _, api) => {
  try {
    const {data} = await api.get(`${URLs.PRODUCTS}/${id}s`);
    dispatch(loadingSucceeded());
    return dispatch(productDetailLoaded(data))
  } catch (error) {
    if (error.message) {
      dispatch(loadingFailed(error.message))
    }
  }


}

export const onAddToBasketProduct = (product, purchasing) => (dispatch) => {
  const payload = onProductChosen(product, purchasing);
  dispatch({ type: PRODUCT_CHOSEN, payload });
}
