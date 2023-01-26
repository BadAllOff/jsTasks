export const humanizeFormat = (number) => {
  if (typeof number !== 'number') return '';
  if (number % 100 >= 11 && number % 100 <= 13) return number + 'th';

  switch (number % 10) {
    case 1:
      return number + 'st';
    case 2:
      return number + 'nd';
    case 3:
      return number + 'rd';
  }

  return number + 'th';
};


export const humanizeFormat = (number) => {
  if (typeof number !== 'number') return '';
  const suffix = number % 100 >= 11 && number % 100 <= 13 ? 'th' : 
    (number % 10 === 1 ? 'st' : 
    (number % 10 === 2 ? 'nd' : 
    (number % 10 === 3 ? 'rd' : 'th')));
  return `${number}${suffix}`;
}
// This code eliminates the need for multiple if-else statements by using a single ternary operator to check the conditions and return the appropriate suffix.

export const humanizeFormat = (number) => {
  if (typeof number !== 'number') return '';
  const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
  return `${number}${suffixes[number % 10]}`;
}

// This code uses an array with suffixes for each number and uses the last digit of the number to index the array and return the appropriate suffix.
