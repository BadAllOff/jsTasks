export const reverseStringInRange = (string, range) => {
  const originalWord = [...string];
  const startIndex = range[0];
  const endIndex = range[1] < originalWord.length ? range[1] : originalWord.length - 1;

  const reversedPartial = originalWord
    .slice(startIndex, endIndex + 1)
    .reverse()
    .join('');

  return string.slice(0, startIndex) + reversedPartial + string.slice(endIndex + 1);
};
