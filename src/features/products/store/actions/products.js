import {
  PRODUCT_CHOSEN,
  PRODUCT_DETAIL_LOADED,
  PRODUCTS_LOADED,
  LOADING_FAILED,
  LOADING_SUCCEEDED,
  LOADING,
  PER_PAGE_CHANGED,
  PAGE_CHANGED,
  TOTAL_ITEMS_CHANGED,
  OPEN_CREATE_PRODUCT,
  CLOSE_CREATE_PRODUCT,
  SAVE_PRODUCT_ERROR,
  SAVE_PRODUCT_SUCCESS,
  RESET_PER_PAGE,
  RESET_PAGE,
  SAVING_PRODUCT_STARTS,
  SAVING_PRODUCT_FINISHED,
  CALL_SAVE_PRODUCT,
  PRODUCTS_REQUESTED,
  PRODUCT_DETAIL_REQUESTED,
  CALL_SAVE_EDITED_PRODUCT,
  DELETE_PRODUCT,
} from '../actionsTypes';
import { onProductChosen } from '../../../../helpers/helpers';

export const productsLoaded = (payload) => {
  return {
    type: PRODUCTS_LOADED,
    payload,
  };
};

export const loadingFailed = (payload) => {
  return {
    type: LOADING_FAILED,
    payload,
  };
};

export const loadingSucceeded = () => {
  return {
    type: LOADING_SUCCEEDED,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const productChosen = (payload) => {
  return {
    type: PRODUCT_CHOSEN,
    payload,
  };
};

export const productDetailLoaded = (payload) => {
  return {
    type: PRODUCT_DETAIL_LOADED,
    payload,
  };
};

export const pageChanged = (payload) => {
  return {
    type: PAGE_CHANGED,
    payload,
  };
};

export const perPageChanged = (payload) => {
  return {
    type: PER_PAGE_CHANGED,
    payload,
  };
};

export const totalItemsChanged = (payload) => {
  return {
    type: TOTAL_ITEMS_CHANGED,
    payload,
  };
};

export const openCreateProduct = () => {
  return {
    type: OPEN_CREATE_PRODUCT,
  };
};

export const closeCreateProduct = () => {
  return {
    type: CLOSE_CREATE_PRODUCT,
  };
};

export const saveProductError = (payload) => {
  return {
    type: SAVE_PRODUCT_ERROR,
    payload,
  };
};

export const saveProductSuccess = () => {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  };
};

export const resetPerPage = () => {
  return { type: RESET_PER_PAGE };
};

export const resetPage = () => {
  return { type: RESET_PAGE };
};

export const savingProductStarts = () => {
  return {
    type: SAVING_PRODUCT_STARTS,
  };
};

export const savingProductFinished = () => {
  return {
    type: SAVING_PRODUCT_FINISHED,
  };
};

export const fetchProducts = (searchParams) => {
  return {
    type: PRODUCTS_REQUESTED,
    searchParams,
  };
};

export const fetchProduct = (id) => {
  return {
    type: PRODUCT_DETAIL_REQUESTED,
    id,
  };
};

export const onAddToBasketProduct = (product, purchasing) => {
  const payload = onProductChosen(product, purchasing);
  return productChosen(payload);
};

export const openCreateModal = () => {
  return openCreateProduct();
};

export const closeCreateModal = () => {
  return closeCreateProduct();
};

export const saveProduct = (product, searchParams) => {
  return {
    type: CALL_SAVE_PRODUCT,
    product,
    searchParams,
  };
};

export const editProduct = (product, history) => {
  return {
    type: CALL_SAVE_EDITED_PRODUCT,
    product,
    history,
  };
};

export const deleteProduct = (id, searchParams) => {
  return {
    type: DELETE_PRODUCT,
    id,
    searchParams,
  };
};
