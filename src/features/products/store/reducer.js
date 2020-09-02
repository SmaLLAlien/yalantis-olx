import * as actionTypes from './actionsTypes';
import { MAX_PRICE_DEFAULT } from '../../../global/constants';
import {checkOrigins} from '../../../helpers/helpers';

const initialState = {
  products: [],
  purchasing: [],
  totalPurchasingPrice: 0,
  detailedProduct: null,
  origins: [],
  minRangePrice: 0,
  maxRangePrice: MAX_PRICE_DEFAULT,
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
      const newOrigins = checkOrigins(state, payload);

      return {
        ...state,
        origins: newOrigins,
      };
    }

    case actionTypes.BASKET_PRODUCT_DELETED: {

      return {
        ...state,
        purchasing: payload.purchasing,
        totalPurchasingPrice: payload.price
      };
    }

    default:
      return state;
  }
};

export default reducer;
