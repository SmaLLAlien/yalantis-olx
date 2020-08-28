import {DECREASE_CHOSEN, INCREASE_CHOSEN, PRODUCT_CHOSEN, PRODUCT_DETAIL_LOADED, PRODUCTS_LOADED} from "./actionsTypes";
import {URLs} from "../../../global/constants";
import {onProductChosen} from "../../../helpers/helpers";

export const productLoaded = payload => {
  return {
    type: PRODUCTS_LOADED,
    payload
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
  const {data} = await api(URLs.PRODUCTS);
  dispatch(productLoaded(data.items));
};

export const fetchProduct = (id) => async (dispatch, _, api) => {
  const {data} = await api(`${URLs.PRODUCTS}/${id}`);
  return dispatch(productDetailLoaded(data))
}

export const onAddToBasketProduct = (product, purchasing) => (dispatch) => {
  const payload = onProductChosen(product, purchasing);
  dispatch({ type: PRODUCT_CHOSEN, payload });
}
