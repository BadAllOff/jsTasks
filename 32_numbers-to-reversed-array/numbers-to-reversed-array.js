export const numbersToReversedArray = (number) => {
  return String(number).split('').reverse().map(Number);
};
