export const uniqueInOrder = ([...string]) => {
  return string.filter((val, index, array) => {
    if (index === 0) return val;
    if (val !== array[index - 1]) return val;
  });
};
