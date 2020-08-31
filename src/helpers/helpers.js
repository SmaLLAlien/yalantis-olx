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

const countPrice = (arr) => {
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

export const normalizeOrigins = (origins) => origins.map(origin => {
  return {...origin, checked: false}
})

export const getQueryVariable = (variable) => {
  let query = window.location.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}
