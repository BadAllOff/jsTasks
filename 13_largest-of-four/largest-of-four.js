export const largestOfFour = (arrays) => {
  const resultArray = arrays.map((subArray) => {
    return subArray.reduce((prev, current) => {
      return prev > current ? prev : current;
    }, 0);
  });

  return resultArray;
};
