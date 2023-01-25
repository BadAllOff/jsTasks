export const averageMark = (array) => {
  return Math.floor(array.reduce((sum, element) => sum + element, 0) / array.length);
};
