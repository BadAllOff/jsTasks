export const removeDuplicates = (array) => {
  return array.reduce((accum, elem, index) => {
    if (index == 0 || !accum.includes(elem)) accum.push(elem);
    return accum;
  }, []);
};
