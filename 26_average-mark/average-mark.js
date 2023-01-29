export const averageMark = (array) => {
  return Math.floor(array.reduce((sum, element) => sum + element, 0) / array.length);
};

// export const averageMark = (array) => {
//   return array.reduce((sum, element) => sum + element, 0) / array.length;
// };

// that one doesn't work as expected
