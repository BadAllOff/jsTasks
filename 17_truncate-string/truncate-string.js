// export const truncateString = (string, maxLength) => {
//   if (string.length <= maxLength) return string;
//   let stringLength = maxLength <= 3 ? maxLength : maxLength - 3;

//   return string.slice(0, stringLength) + '...';
// };

export const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) return string;
  return string.slice(0, maxLength > 3 ? maxLength - 3 : maxLength) + '...';
};

// export const truncateString = (string, maxLength) => {
//     if (string.length <= maxLength) return string;
//     return string.substr(0, maxLength > 3 ? maxLength - 3 : maxLength) + '...';
// }

// export const truncateString = (string, maxLength) => {
//     if (typeof maxLength !== 'number' || string.length <= maxLength) return string;
//     return string.substr(0, maxLength > 3 ? maxLength - 3 : maxLength) + '...';
// }
