import {
  FETCH_ORDER_ERROR,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDERS_ERROR,
  FETCH_ORDERS_SUCCESS,
  LOAD_ORDER_FROM_SERVER,
  LOAD_ORDERS_FROM_SERVER, ORDER_CREATED, ORDER_LOADED, ORDERED,
  ORDERS_LOADED, POST_ORDER_ERROR, POST_ORDER_SUCCESS
} from "../actionsTypes";

// ORDERS

export const loadOrders = () => {
  return {
    type: LOAD_ORDERS_FROM_SERVER
  }
}

export const fetchOrdersSuccess = () => {
  return {
    type: FETCH_ORDERS_SUCCESS,
  };
};

export const ordersLoaded = (payload) => {
  return {
    type: ORDERS_LOADED,
    payload,
  };
};

export const fetchOrdersError = (payload) => {
  return {
    type: FETCH_ORDERS_ERROR,
    payload,
  };
};

// ORDER

export const loadOrder = (id) => {
  return {
    type: LOAD_ORDER_FROM_SERVER,
    id
  }
}

export const fetchOrderSuccess = () => {
  return {
    type: FETCH_ORDER_SUCCESS,
  };
};

export const orderLoaded = (payload) => {
  return {
    type: ORDER_LOADED,
    payload,
  };
};

export const fetchOrderError = (payload) => {
  return {
    type: FETCH_ORDER_ERROR,
    payload,
  };
};

// CREATE ORDER

export const orderCreated = products => {
  return {
    type: ORDER_CREATED,
    products,
  };
}

export const postOrderSuccess = () => {
  return {
    type: POST_ORDER_SUCCESS,
  };
};

export const removeOrdered = (payload) => {
  return {
    type: ORDERED,
    payload,
  };
};

export const postOrderError = (payload) => {
  return {
    type: POST_ORDER_ERROR,
    payload,
  };
};
