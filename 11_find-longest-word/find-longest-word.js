export const findLongestWord = (string) => {
  const wordsList = string.split(' ');

  let longestWord = wordsList.reduce((prevWord, currWord) => {
    return prevWord.length > currWord.length ? prevWord : currWord;
  }, '');

  return longestWord.length;
};
