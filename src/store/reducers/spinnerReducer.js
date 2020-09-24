import {HIDE_SPINNER, SHOW_SPINNER} from "../actionTypes";

const initialState = {
  visible: false
}

const spinnerReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case HIDE_SPINNER: {
      return {
        ...state,
        visible: false
      }
    }
    case SHOW_SPINNER: {
      return {
        ...state,
        visible: true
      }
    }
    default: {
      return state
    }
  }
}

export default spinnerReducer;
