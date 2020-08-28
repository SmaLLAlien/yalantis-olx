import {DECREASE_CHOSEN, INCREASE_CHOSEN, PRODUCT_CHOSEN, PRODUCTS_LOADED} from "./actionsTypes";
import {URLs} from "../../../global/constants";

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

export const fetchProducts = () => async (dispatch, _, api) => {
  const {data} = await api(URLs.PRODUCTS);
  dispatch(productLoaded(data.items));
};
