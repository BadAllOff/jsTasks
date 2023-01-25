const VOWELS = 'aeiou';

export const pigLatin = (word) => {
  let consonants = '';
  for (const char of word) {
    if (VOWELS.includes(char)) {
      break;
    }
    consonants += char;
  }
  if (consonants) return `${word.substring(consonants.length)}${consonants}ay`;
  return `${word}way`;
};
