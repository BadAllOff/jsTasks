export const maxProduct = (array) => {
  let result = array.reduce((accum, current, index, array) => {
    if (index === 0) return current * array[index + 1];
    if (accum < current * array[index + 1]) return current * array[index + 1];
    return accum;
  }, 0);

  return result;
};
