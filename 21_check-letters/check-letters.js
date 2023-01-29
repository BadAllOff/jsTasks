// if we can re-create the second string out of the first string
// it contains all letters we need

// export const checkLetters = (array) => {
//   let string = array[0].toLowerCase();
//   let searchString = array[1].toLowerCase();

//   let result = searchString
//     .split('')
//     .map((char) => {
//       if (string.indexOf(char) >= 0) return char;
//     })
//     .join('');

//   return searchString === result;
// };

export const checkLetters = (array) => {
  let string = array[0].toLowerCase();
  let searchString = array[1].toLowerCase();

  for (let char of searchString) {
    if (string.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
};

// This optimized version avoids creating a new array with map and concatenating the result with join, which is not necessary for this particular task. Instead, it uses a for loop to iterate over the searchString and check if each character is present in the string. If a character is not present, the function returns false immediately, avoiding unnecessary looping and string concatenation.
