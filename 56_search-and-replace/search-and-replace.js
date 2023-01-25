export const searchAndReplace = (string, wordBefore, wordAfter) => {
  return string.replace(wordBefore, (word) => {
    if (word[0] === word[0].toUpperCase()) {
      return wordAfter[0].toUpperCase() + wordAfter.slice(1);
    }
    return wordAfter;
  });
};
