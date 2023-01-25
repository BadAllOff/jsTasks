export const swapCases = (str) => {
  return str
    .split('')
    .map(function (c) {
      return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    })
    .join('');
};
