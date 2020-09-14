import * as actionTypes from '../actionsTypes';

const initialState = {
  orders: [],
  order: null,
  postError: null,
  fetchOrdersError: null
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

    case actionTypes.FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        fetchOrdersError: null,
      }
    }

    case actionTypes.FETCH_ORDERS_ERROR: {
      return {
        ...state,
        fetchOrdersError: payload
      }
    }

    default:
      return state;
  }
}

export default ordersReducer;
