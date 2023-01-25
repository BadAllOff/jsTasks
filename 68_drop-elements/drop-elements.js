export const dropElements = (array, fn) => {
  const resultArr = [...array];
  while (resultArr.length !== 0) {
    if (fn(resultArr[0])) return resultArr;
    resultArr.shift();
  }
  return resultArr;
};
