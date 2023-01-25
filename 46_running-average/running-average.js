export const runningAverage = (num) => {
  let number = num || 0;
  return (num) => {
    if (!number) number = num;
    return number === num ? number : (number + num) / 2;
  };
};
