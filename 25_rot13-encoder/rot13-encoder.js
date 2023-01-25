export const rot13Encoder = (string) => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let chars = string.split('');

  const result = chars.map((char) => {
    if (!alphabet.includes(char)) return char;

    let charIndex = alphabet.indexOf(char);
    let newCharIndex = (charIndex + 13) % 26;

    return alphabet.charAt(newCharIndex);
  });

  return result.join('');
};
