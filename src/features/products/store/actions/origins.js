import {GOT_ORIGINS_FROM_URL, ORIGINS_CHECKED, ORIGINS_LOADED, ORIGINS_REQUESTED, RESET_ORIGIN} from "../actionsTypes";

export const originsLoaded = (payload) => {
  return {
    type: ORIGINS_LOADED,
    payload,
  };
};

export const fetchOrigins = () => {
  return {
    type: ORIGINS_REQUESTED
  }
};

export const resetOrigin = () => {
  console.log(2);
  return {type: RESET_ORIGIN};
};

export const manageOrigins = (payload) => {
  return {type: ORIGINS_CHECKED, payload};
};

export const setOriginQueryToStore = (payload) => {
  if (!payload.length) {
    return {type: RESET_ORIGIN};
  }
  return {type: GOT_ORIGINS_FROM_URL, payload};
};
