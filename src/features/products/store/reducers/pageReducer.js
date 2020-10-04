import * as actionTypes from '../actionsTypes';

const initialState = {
  currentPage: 1,
  perPage: 50,
  totalItems: 0,
  originUrlState: [],
};

export const pageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOTAL_ITEMS_CHANGED: {
      return {
        ...state,
        totalItems: payload,
      };
    }

    case actionTypes.PER_PAGE_CHANGED: {
      return {
        ...state,
        perPage: payload,
      };
    }

    case actionTypes.PAGE_CHANGED: {
      return {
        ...state,
        currentPage: payload,
      };
    }

    case actionTypes.GOT_ORIGINS_FROM_URL: {
      return {
        ...state,
        originUrlState: payload,
      };
    }

    case actionTypes.RESET_ORIGIN: {
      return {
        ...state,
        originUrlState: [],
      };
    }

    case actionTypes.RESET_PER_PAGE: {
      return {
        ...state,
        perPage: 50,
      };
    }

    case actionTypes.RESET_PAGE: {
      return {
        ...state,
        currentPage: 1,
      };
    }

    default:
      return state;
  }
};
