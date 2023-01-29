// function vowelCount(str) {
//     var m = str.match(/[aeiou]/gi);
//     return m === null ? 0 : m.length;
// }
// option above looks great but as I don't like regexp I prefer second option

export const vowelCount = (string) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = string
    .toLowerCase()
    .split('')
    .filter((char) => {
      return vowels.includes(char);
    });

  return result.length;
};


export const vowelCount = (string) => {
  return (string.match(/[aeiou]/gi) || []).length;
};

const vowelCount = (str) => (str.match(/[aeiou]/gi) || []).length;
