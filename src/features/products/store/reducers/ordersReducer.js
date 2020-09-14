import * as actionTypes from '../actionsTypes';

const initialState = {
  orders: [],
  order: null
}

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ORDERS_LOADED: {
      return {
        ...state,
        orders: payload
      }
    }

    case actionTypes.ORDER_LOADED: {
      return {
        ...state,
        order: payload
      }
    }

    default:
      return state;
  }
}

export default ordersReducer;
