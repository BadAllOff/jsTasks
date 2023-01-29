// export const rot13Encoder = (string) => {
//   let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let chars = string.split('');

//   const result = chars.map((char) => {
//     if (!alphabet.includes(char)) return char;

//     let charIndex = alphabet.indexOf(char);
//     let newCharIndex = (charIndex + 13) % 26;

//     return alphabet.charAt(newCharIndex);
//   });

//   return result.join('');
// };

export const rot13Encoder = (string) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const charMap = new Map();
  for (let i = 0; i < 26; i++) {
    charMap.set(alphabet[i], alphabet[(i + 13) % 26]);
  }

  let result = '';
  for (const char of string) {
    if (alphabet.includes(char)) {
      result += charMap.get(char);
    } else {
      result += char;
    }
  }

  return result;
};

// This optimized version uses a Map to store the mapping between the original characters and their rot13 encoded counterparts. This allows us to encode characters by looking up their encoded counterpart in the map, which is much faster than searching for the character in the alphabet and computing its encoded counterpart every time. Additionally, the original string is processed character by character instead of using split and map to improve performance.
