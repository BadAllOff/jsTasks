export const missedLetters = (letters) => {
  for (let i = 1; i < letters.length; i++) {
    const letter = letters[i].charCodeAt(0);
    if (letter - letters[i - 1].charCodeAt(0) !== 1) {
      return String.fromCharCode(letter - 1);
    }
  }
};
