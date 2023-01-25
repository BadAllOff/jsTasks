export const findNumbers = (value) => {
  const regex = /\d+/g;
  const digits = value.match(regex);
  return digits.map((n) => parseInt(n));
};
