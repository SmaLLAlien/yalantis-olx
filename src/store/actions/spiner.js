import { HIDE_SPINNER, SHOW_SPINNER } from '../actionTypes';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const hideSpinner = () => {
  return {
    type: HIDE_SPINNER,
  };
};
