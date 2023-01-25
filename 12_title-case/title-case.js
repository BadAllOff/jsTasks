export const titleCase = (string) => {
  const wordsList = string.toLowerCase().split(' ');
  return wordsList
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};
