import * as actionTypes from './actionsTypes';

const initialState = {
  products: [],
  purchasing: [],
  totalPurchasingPrice: 0,
  detailedProduct: null,
  origins: null
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

    case actionTypes.ORIGINS_LOADED: {
      return {
        ...state,
        origins: payload,
      };
    }

    case actionTypes.ORIGINS_CHECKED: {
      const temp = [...state.origins];
      const index = temp.findIndex(origin => origin.value === payload.value);
      const origin = {...temp[index]};
      origin.checked = !origin.checked;
      temp[index] = origin;

      return {
        ...state,
        origins: temp,
      };
    }


    default:
      return state;
  }
};

export default reducer;
