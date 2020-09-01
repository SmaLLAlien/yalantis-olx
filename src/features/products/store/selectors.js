export const getBasketProducts = (state) => state.productState.purchasing;
export const getProducts = (state) => state.productState.products;
export const getTotalBasketPrice = (state) =>
  state.productState.totalPurchasingPrice;
export const getDetailedProduct = (state) => state.productState.detailedProduct;
export const getHttpError = (state) => state.httpErrors.serverErrors;
export const getOrigins = (state) => state.productState.origins;
