export const nextInLine = (array, number) => {
  array.push(number);
  return array.shift();
};
