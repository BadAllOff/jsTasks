// if we can re-create the second string out of the first string
// it contains all letters we need

export const checkLetters = (array) => {
  let string = array[0].toLowerCase();
  let searchString = array[1].toLowerCase();

  let result = searchString
    .split('')
    .map((char) => {
      if (string.indexOf(char) >= 0) return char;
    })
    .join('');

  return searchString === result;
};
