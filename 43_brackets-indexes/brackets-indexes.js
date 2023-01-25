export const bracketsIndexes = (string, openingBracketIndex) => {
  let counter = 1;

  if (string.charAt(openingBracketIndex) === '(') {
    for (let index = openingBracketIndex + 1; index < string.length; index++) {
      if (string.charAt(index) === '(') counter++;
      if (string.charAt(index) === ')') counter--;
      if (counter === 0) return index;
    }
  }
  return -1;
};
