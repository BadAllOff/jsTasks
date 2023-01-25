export const diffArray = (firstArr, secondArr) => {
  const first = firstArr.filter((num) => !secondArr.includes(num));
  const second = secondArr.filter((num) => !firstArr.includes(num));

  return first.concat(second);
};
