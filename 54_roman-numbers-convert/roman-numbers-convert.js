// Found it from previous students. IMHO looks like the most robust and futureproof
const ROMAN_SYMBOLS = [
  ['I', 'V', 'X'],
  ['X', 'L', 'C'],
  ['C', 'D', 'M'],
];

function toRoman(position, digit) {
  const symbols = ROMAN_SYMBOLS[position];
  switch (digit) {
    case 1:
    case 2:
    case 3:
      return symbols[0].repeat(digit);
    case 4:
      return symbols[0] + symbols[1];
    case 5:
    case 6:
    case 7:
    case 8:
      return symbols[1] + symbols[0].repeat(digit - 5);
    case 9:
      return symbols[0] + symbols[2];
    default:
      return '';
  }
}

export function romanNumbersConvert(num) {
  return [...String(num)]
    .reverse()
    .map((digit, i) => toRoman(i, Number(digit)))
    .reverse()
    .join('');
}
