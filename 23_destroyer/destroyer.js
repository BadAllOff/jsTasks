export const destroyer = (array, ...rest) => {
  return array.filter((elem) => !rest.includes(elem));
};
