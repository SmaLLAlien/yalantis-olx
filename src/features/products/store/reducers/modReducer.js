import * as actionTypes from '../actionsTypes';

const initialState = {
  openCreate: false,
  error: null,
  success: false
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
        error: payload,
        success: false
      }
    }

    case actionTypes.SAVE_PRODUCT_SUCCESS: {
      return {
        ...state,
        error: null,
        success: true
      }
    }

    case actionTypes.FORM_OPENED: {
      return {
        ...state,
        error: null,
        success: false
      }
    }


    default:
      return state
  }
}
