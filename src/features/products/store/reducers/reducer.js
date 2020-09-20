import * as actionTypes from '../actionsTypes';
import { MAX_PRICE_DEFAULT } from '../../../../global/constants';
import { checkOrigins, countPrice } from '../../../../helpers/helpers';

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
    case actionTypes.RESET_ORIGIN: {
      const newOrigins = state.origins.map((origin) => {
        const newOrigin = { ...origin };
        newOrigin.checked = false;
        return newOrigin;
      });

      return {
        ...state,
        origins: newOrigins,
      };
    }

    case actionTypes.BASKET_PRODUCT_DELETED: {
      const temp = state.purchasing.filter((product) => product.id !== payload);
      const price = countPrice(temp);

      return {
        ...state,
        purchasing: temp,
        totalPurchasingPrice: price,
      };
    }

    case actionTypes.ORDERED: {
      const newPurchasing = state.purchasing.filter((product) => {
        return !payload.find((ordered) => ordered.id === product.id);
      });

      return {
        ...state,
        purchasing: newPurchasing,
        totalPurchasingPrice: countPrice(newPurchasing),
      };
    }

    default:
      return state;
  }
};

export default reducer;
