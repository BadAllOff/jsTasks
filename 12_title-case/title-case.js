// export const titleCase = (string) => {
//   const wordsList = string.toLowerCase().split(' ');
//   return wordsList
//     .map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(' ');
// };

// export const titleCase = (string) => {
//   return string.replace(/(^|\s)[a-z]/g, (match) => match.toUpperCase());
// };

export const titleCase = (string) => {
  return string.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
};
