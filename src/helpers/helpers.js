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

const onProductChosen = (payload, purchasing) => {
  const newPayload = { ...payload, pieces: 1 };
  const temp = [...purchasing];
  temp.push(newPayload);

  const result = groupingArrayById(temp);
  const price = countPrice(result);

  return { result, price };
};

export default onProductChosen;
