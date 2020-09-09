import * as actionTypes from '../actionsTypes';

const initialState = {
  openCreate: false
}

export const modalReducer = (state = initialState, action) => {
  const { type } = action;
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

    default:
      return state
  }
}
