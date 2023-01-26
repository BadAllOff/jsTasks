export const findLongestWord = (string) => {
  const wordsList = string.split(' ');

  let longestWord = wordsList.reduce((prevWord, currWord) => {
    return prevWord.length > currWord.length ? prevWord : currWord;
  }, '');

  return longestWord.length;
};


// export const findLongestWord = (string) => {
  // return string.split(' ').reduce((a, b) => a.length > b.length ? a : b).length;
//};
