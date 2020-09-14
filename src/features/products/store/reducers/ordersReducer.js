import * as actionTypes from '../actionsTypes';

const initialState = {
  orders: [],
  order: null,
  postError: null
}

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ORDERS_LOADED: {
      return {
        ...state,
        orders: payload,
      }
    }

    case actionTypes.ORDER_LOADED: {
      return {
        ...state,
        order: payload,
      }
    }

    case actionTypes.POST_ORDER_SUCCESS: {
      return {
        ...state,
        postError: null,
      }
    }

    case actionTypes.POST_ORDER_ERROR: {
      return {
        ...state,
        postError: payload
      }
    }

    default:
      return state;
  }
}

export default ordersReducer;
