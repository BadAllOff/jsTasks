// TODO firstNSmallest
export const firstNSmallest = (array, num) => {
  const result = [];

  if (num === 0) return result;

  const copyArray = array.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < num; i++) {
    result[copyArray[i][1]] = copyArray[i][0];
  }

  return result.filter(function (el) {
    return el != null;
  });
};
