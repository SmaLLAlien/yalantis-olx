import { shape, number, string, bool, func } from 'prop-types';

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

export const historyType = shape({
  push: func.isRequired,
});

export const locationType = shape({
  pathname: string,
});
