import {
  DECREASE_CHOSEN,
  INCREASE_CHOSEN,
  PRODUCT_CHOSEN,
  PRODUCT_DETAIL_LOADED,
  PRODUCTS_LOADED,
  LOADING_FAILED,
  LOADING_SUCCEEDED,
  LOADING,
  ORIGINS_LOADED,
  ORIGINS_CHECKED,
  BASKET_PRODUCT_DELETED,
  PER_PAGE_CHANGED,
  PAGE_CHANGED,
  TOTAL_ITEMS_CHANGED,
  GOT_ORIGINS_FROM_URL, OPEN_CREATE_PRODUCT, CLOSE_CREATE_PRODUCT, SAVE_PRODUCT_ERROR, SAVE_PRODUCT_SUCCESS,
} from './actionsTypes';
import { URLs } from '../../../global/constants';
import {
  changePiecesCount,
  countPrice,
  normalizeOrigins,
  onProductChosen,
} from '../../../helpers/helpers';

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

export const increaseChosen = (payload) => {
  return {
    type: INCREASE_CHOSEN,
    payload,
  };
};

export const decreaseChosen = (payload) => {
  return {
    type: DECREASE_CHOSEN,
    payload,
  };
};

export const productDetailLoaded = (payload) => {
  return {
    type: PRODUCT_DETAIL_LOADED,
    payload,
  };
};

export const originsLoaded = (payload) => {
  return {
    type: ORIGINS_LOADED,
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
  }
}

export const closeCreateProduct = () => {
  return {
    type: CLOSE_CREATE_PRODUCT,
  }
}

export const saveProductError = (payload) => {
  return {
    type: SAVE_PRODUCT_ERROR,
    payload
  }
}

export const saveProductSuccess = () => {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  }
}

export const fetchProducts = (searchParams) => async (dispatch, state, api) => {
  try {
    const { data } = await api.get(`${URLs.PRODUCTS}/${searchParams}`);
    dispatch(loadingSucceeded());
    dispatch(totalItemsChanged(data.totalItems));
    dispatch(perPageChanged(data.perPage));
    dispatch(pageChanged(data.page));
    return dispatch(productsLoaded(data.items));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

export const fetchProduct = (id) => async (dispatch, _, api) => {
  dispatch(loading());
  try {
    const { data } = await api.get(`${URLs.PRODUCTS}/${id}`);
    dispatch(loadingSucceeded());
    return dispatch(productDetailLoaded(data));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

export const fetchOrigins = () => async (dispatch, getState, api) => {
  dispatch(loading());
  try {
    const { data } = await api.get(URLs.ORIGINS);
    dispatch(loadingSucceeded());

    let items = normalizeOrigins(data.items);

    const searchValues = getState().pageState.originUrlState;
    items = items.map((origin) => {
      if (searchValues.indexOf(origin.value) !== -1) {
        const temp = { ...origin };
        temp.checked = true;
        return temp;
      }
      return origin;
    });

    return dispatch(originsLoaded(items));
  } catch (error) {
    if (error.message) {
      return dispatch(loadingFailed(error.message));
    }
    return dispatch(
      loadingFailed('Something is wrong, please try again later'),
    );
  }
};

export const onAddToBasketProduct = (product, purchasing) => (dispatch) => {
  const payload = onProductChosen(product, purchasing);
  dispatch(productChosen(payload));
};

export const decreaseProductPieces = (id, purchasedProducts) => (dispatch) => {
  const payload = changePiecesCount(id, purchasedProducts, '-');
  dispatch(decreaseChosen(payload));
};

export const increaseProductPieces = (id, purchasedProducts) => (dispatch) => {
  const payload = changePiecesCount(id, purchasedProducts, '+');
  dispatch(increaseChosen(payload));
};

export const manageOrigins = (payload) => (dispatch) => {
  dispatch({ type: ORIGINS_CHECKED, payload });
};

export const deleteProductFromBasket = (payload) => (dispatch, getState) => {
  const {
    productState: { purchasing },
  } = getState();
  const temp = purchasing.filter((product) => product.id !== payload);
  const price = countPrice(temp);
  const newPayload = { purchasing: temp, price };

  dispatch({ type: BASKET_PRODUCT_DELETED, payload: newPayload });
};

export const setOriginQueryToStore = (payload) => (dispatch) => {
  dispatch({ type: GOT_ORIGINS_FROM_URL, payload });
};

export const openCreateModal = () => dispatch => {
  dispatch(openCreateProduct());
}

export const closeCreateModal = () => dispatch => {
  dispatch(closeCreateProduct());
  dispatch(saveProductSuccess());
}

export const saveProduct = payload => async (dispatch, _, api) => {
  try {
      await api.post(URLs.PRODUCTS, {
        product: payload
        },
        {
        headers: {
          Authorization:  process.env.REACT_APP_TOKEN/'s'
        }
      }
      );
    dispatch(saveProductSuccess());
    dispatch(closeCreateProduct());
    } catch (error) {
      if (error.message) {
        return dispatch(saveProductError(error.message));
      }
      return dispatch(
          loadingFailed('Something is wrong, please try again later'),
      );
    }
}
