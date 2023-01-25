export const arrayPlusArray = (arr1, arr2) => {
  const [longestArray, shortestArray] = arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1];

  return longestArray.map((num, index) => {
    if (shortestArray[index]) return num + shortestArray[index];
    return num;
  });
};
