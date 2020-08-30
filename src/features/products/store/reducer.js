import * as actionTypes from './actionsTypes';

const initialState = {
  products: [],
  purchasing: [],
  totalPurchasingPrice: 0,
  detailedProduct: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.PRODUCTS_LOADED:
      return {
        ...state,
        products: payload,
      };

    case actionTypes.PRODUCT_CHOSEN: {
      return {
        ...state,
        purchasing: payload.result,
        totalPurchasingPrice: payload.price,
      };
    }

    case actionTypes.DECREASE_CHOSEN: {
      return {
        ...state,
        purchasing: payload.result,
        totalPurchasingPrice: payload.price,
      };
    }

    case actionTypes.INCREASE_CHOSEN: {
      return {
        ...state,
        purchasing: payload.result,
        totalPurchasingPrice: payload.price,
      };
    }

    case actionTypes.PRODUCT_DETAIL_LOADED: {
      return {
        ...state,
        detailedProduct: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
