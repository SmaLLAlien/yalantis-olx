import * as actionTypes from './actionsTypes';

const initialState = {
  products: [],
  purchasing: [],
  totalPurchasingPrice: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.PRODUCTS_LOADED:
      return {
        ...state,
        products: state.products.concat(payload),
      };

    case actionTypes.PRODUCT_CHOSEN:
      const newPayload = { ...payload, pieces: 1 };
      const temp = [...state.purchasing];
      temp.push(newPayload);
      const res = temp.reduce((acc, obj) => {
        const index = acc.findIndex((elm) => {
          return elm.id === obj.id;
        });
        if (index === -1) {
          return acc.concat({ ...obj });
        }
        acc[index].pieces += obj.pieces;
        return acc;
      }, []);
      const price = res.reduce((acc, obj) => {
        acc += obj.price * obj.pieces;
        return acc;
      }, 0);

      return {
        ...state,
        purchasing: res,
        totalPurchasingPrice: price,
      };

    default:
      return state;
  }
};

export default reducer;
