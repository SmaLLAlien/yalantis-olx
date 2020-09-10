import * as actionTypes from '../actionsTypes';

const initialState = {
  openCreate: false,
  error: null
}

export const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.OPEN_CREATE_PRODUCT: {
      return {
        ...state,
        openCreate: true
      }
    }

    case actionTypes.CLOSE_CREATE_PRODUCT: {
      return {
        ...state,
        openCreate: false
      }
    }

    case actionTypes.SAVE_PRODUCT_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    case actionTypes.SAVE_PRODUCT_SUCCESS: {
      return {
        ...state,
        error: null
      }
    }

    default:
      return state
  }
}
