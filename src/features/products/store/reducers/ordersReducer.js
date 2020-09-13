import * as actionTypes from '../actionsTypes';

const initialState = {
  orders: []
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

    default:
      return state;
  }
}

export default ordersReducer;
