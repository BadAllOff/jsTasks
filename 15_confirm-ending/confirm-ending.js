// export const confirmEnding = (string, endingWord) => {
//     return string.substring(string.length - endingWord.length, string.length) == endingWord
// }

// generally functions are more readable when return statement is separated
export const confirmEnding = (string, endingWord) => {
  const ending = string.substring(string.length - endingWord.length, string.length);
  return ending == endingWord;
};
