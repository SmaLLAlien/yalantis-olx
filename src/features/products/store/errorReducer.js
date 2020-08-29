import * as actionTypes from './actionsTypes';

const initialState = {
  serverErrors: null
};

export const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOADING_FAILED: {
      return {
        ...state,
        serverErrors: payload
      }
    }

    case actionTypes.LOADING_SUCCEEDED: {
      return {
        ...state,
        serverErrors: null
      }
    }

    default:
      return state;
  }
}
