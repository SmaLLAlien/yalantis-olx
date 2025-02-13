export const Routes = {
  PRODUCTS: '/products',
  CREATED: '/products/created',
  CATALOG: '/products/catalog',
  PRODUCT_DETAIL: '/product/:id',
  PRODUCT: '/product',
  BASKET: '/basket',
  EDIT_PRODUCT: '/edit/:id',
  EDIT: '/edit',
  ORDERS: '/orders',
  ORDER_DETAIL: '/order/:id',
  ORDER: '/order',
};

export const URLs = {
  PRODUCTS: '/products',
  ORIGINS: '/products-origins',
  ORDER: '/orders',
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
};

export const OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlZsYWRpc' +
  '2xhdiBC0ZZsb3Vzb3YiLCJpYXQiOjE1OTkwNzQ4MTcsImV4cCI6MTYwNDI1ODgx' +
  'N30.0bS88MjIlEZu0jxUfzNZVzi3hh44e3PR9Rs0AuXTL7E';

export const createProductInitialValues = {
  name: '',
  origin: '',
  price: '',
};

export const SUCCESS_TOASTER_ID = 'SUCCESS_TOASTER_ID';
export const ERROR_TOASTER_ID = 'ERROR_TOASTER_ID';

export const METHODS_FOR_TOASTER = ['post', 'patch', 'put', 'delete'];

export const TOASTER_CONFIG = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  draggable: false,
};
