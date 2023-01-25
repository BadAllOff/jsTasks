export const rowWeights = (array) => {
  return array.reduce(
    (accum, current, index) => {
      index % 2 == 0 ? (accum[0] += current) : (accum[1] += current);
      return accum;
    },
    [0, 0]
  );
};
