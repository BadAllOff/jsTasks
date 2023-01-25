export const spinalCase = (str) => {
  return str
    .split(/[-_ ]|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};
