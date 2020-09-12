export const Routes = {
  PRODUCTS: '/products',
  CREATED: '/products/created',
  CATALOG: '/products/catalog',
  PRODUCT_DETAIL: '/product/:id',
  PRODUCT: '/product',
  BASKET: '/basket',
};

export const URLs = {
  PRODUCTS: '/products',
  ORIGINS: '/products-origins',
};

export const CURRENCY = 'UAH';

export const MAX_PRICE_DEFAULT = '1500';
export const MIN_PRICE_DEFAULT = '0';

export const PER_PAGE_MENU = [10, 25, 50];

export const VALIDATION_MESSAGES = {
  nameRequired: 'Name is required',
  priceRequired: 'Price is required',
  originRequired: 'Origin is required',
  minLength: 'Should be at least 3 characters long',
  maxLength: 'Should be not more 20 characters long',
  positiveNumber: 'Should be positive number',
}
