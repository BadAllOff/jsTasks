export const randomFraction = () => {
  const number = Math.random();
  if (number === 0 || number === 1) return randomFraction();
  return number;
};
