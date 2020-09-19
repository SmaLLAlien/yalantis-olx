import { shape, number, string, bool, func, arrayOf } from 'prop-types';

export const productType = shape({
  id: string.isRequired,
  name: string.isRequired,
  createdAt: string.isRequired,
  isEditable: bool.isRequired,
  origin: string.isRequired,
  price: number.isRequired,
  updatedAt: string.isRequired,
  pieces: number,
});

export const originType = shape({
  value: string,
  displayName: string,
  checked: bool,
});

export const matchType = shape({
  params: shape({
    id: string.isRequired,
  }),
});

export const productErrorsType = shape({
  name: string,
  price: string,
  origin: string,
});

export const productTouchedType = shape({
  name: bool,
  price: bool,
  origin: bool,
});

export const historyType = shape({
  push: func.isRequired,
});

export const locationType = shape({
  pathname: string,
});

export const piecesType = arrayOf(
  shape({
    count: number,
    id: string,
    product: productType,
  }),
);

export const orderType = shape({
  createdAt: string,
  id: string,
  pieces: piecesType,
});

/*
createdAt: "2020-09-13T19:28:19.144Z"
id: "cbdcb12b-6d2a-4699-8835-ac414610d751"
pieces: Array(1)
0:
count: 1
id: "def43009-e87c-40e0-b17f-dabbeb213b14"
product: {isEditable: false, id: "01b5f31d-ac8c-4c
 */
