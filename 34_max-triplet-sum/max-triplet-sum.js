export const maxTripletSum = ([...array]) => {
  const setOfNumbers = Array.from(new Set(array));
  const threeHighestUnique = setOfNumbers
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .slice(0, 3);

  return threeHighestUnique.reduce((a, b) => a + b);
};
