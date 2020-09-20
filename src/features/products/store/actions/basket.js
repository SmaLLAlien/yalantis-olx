import {changePiecesCount} from "../../../../helpers/helpers";
import {BASKET_PRODUCT_DELETED, DECREASE_CHOSEN, INCREASE_CHOSEN} from "../actionsTypes";

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

export const decreaseProductPieces = (id, purchasedProducts) => {
  const payload = changePiecesCount(id, purchasedProducts, '-');
  return decreaseChosen(payload);
};

export const increaseProductPieces = (id, purchasedProducts) =>  {
  const payload = changePiecesCount(id, purchasedProducts, '+');
  return increaseChosen(payload);
};

export const deleteProductFromBasket = (payload) => {
  return { type: BASKET_PRODUCT_DELETED, payload };
};
