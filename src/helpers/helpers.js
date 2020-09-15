import {
  MAX_PRICE_DEFAULT,
  MIN_PRICE_DEFAULT,
  OPTIONS,
} from '../global/constants';

const groupingArrayById = (array) => {
  return array.reduce((acc, obj) => {
    const index = acc.findIndex((elm) => {
      return elm.id === obj.id;
    });
    if (index === -1) {
      return acc.concat({ ...obj });
    }
    acc[index].pieces += obj.pieces;
    return acc;
  }, []);
};

export const countPrice = (arr) => {
  return arr.reduce((acc, obj) => {
    let temp = acc;
    temp += obj.price * obj.pieces;
    return temp;
  }, 0);
};

export const onProductChosen = (payload, purchasing) => {
  const newPayload = { ...payload, pieces: 1 };
  const temp = [...purchasing, newPayload];

  const result = groupingArrayById(temp);
  const price = countPrice(result);

  return { result, price };
};

export const changePiecesCount = (id, array, type) => {
  const temp = [...array];
  const index = temp.findIndex((elm) => {
    return elm.id === id;
  });
  const obj = { ...temp[index] };
  obj.pieces = type === '-' ? obj.pieces - 1 : obj.pieces + 1;
  obj.pieces = obj.pieces <= 1 ? 1 : obj.pieces;
  temp[index] = obj;
  const price = countPrice(temp);

  return {
    result: temp,
    price,
  };
};

export const normalizeOrigins = (origins) =>
  origins.map((origin) => {
    return { ...origin, checked: false };
  });

export const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
};

export const checkOrigins = (state, payload) => {
  const temp = [...state.origins];
  const index = temp.findIndex((origin) => origin.value === payload.value);
  const origin = { ...temp[index] };
  origin.checked = !origin.checked;
  temp[index] = origin;

  return temp;
};

export const makePages = (length) => {
  const temp = [];
  if (length) {
    for (let i = 1; i <= length; i += 1) {
      temp[i] = i;
    }
  }
  return temp;
};

export const makeParams = () => {
  const newQuery = {};
  const origins = getQueryVariable('origins');
  const minPrice = getQueryVariable('minPrice');
  const maxPrice = getQueryVariable('maxPrice');
  const perPage = getQueryVariable('perPage');

  if (origins) {
    newQuery.origins = origins;
  }

  if (minPrice) {
    newQuery.minPrice = minPrice;
    newQuery.maxPrice = maxPrice;
  }

  if (perPage) {
    newQuery.perPage = perPage;
  }

  return newQuery;
};

const isMinPriceChanged = (minPrice, maxPrice) => {
  return (
    minPrice !== MIN_PRICE_DEFAULT && +minPrice > 0 && +minPrice < +maxPrice
  );
};

const isMaxPriceChanged = (minPrice, maxPrice) => {
  return (
    maxPrice !== MAX_PRICE_DEFAULT && +maxPrice > 0 && +minPrice < +maxPrice
  );
};

export const isDisabledPriceRange = (minPrice, maxPrice) => {
  return !(
    isMinPriceChanged(minPrice, maxPrice) ||
    isMaxPriceChanged(minPrice, maxPrice)
  );
};

export const refactorOriginsSearch = (newOrigin, originsArray) => {
  if (originsArray.includes(newOrigin.value)) {
    const index = originsArray.findIndex(
      (search) => search === newOrigin.value,
    );
    originsArray.splice(index, 1);
  } else {
    originsArray.push(newOrigin.value);
  }
};

export const normalizeOrders = (arr) => {
  return arr.map((product) => {
    return { productId: product.id, count: product.pieces };
  });
};

export const formatDate = (isoString) => {
  const date = new Date(Date.parse(isoString));
  return date.toLocaleDateString('en-us', OPTIONS);
};
