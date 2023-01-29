// export const repeatString = (string, num) => {
//   if (num < 0) return '';
//   return string.repeat(num);
// };

export const repeatString = (string, num) => (num <= 0 ? '' : string.repeat(num));
