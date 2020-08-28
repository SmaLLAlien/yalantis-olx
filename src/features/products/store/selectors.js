export const getBasketProducts = (state) => state.productState.purchasing;
export const getProducts = (state) => state.productState.products;
export const getTotalBasketPrice = (state) =>
  state.productState.totalPurchasingPrice;
