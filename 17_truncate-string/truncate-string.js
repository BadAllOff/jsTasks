export const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) return string;
  let stringLength = maxLength <= 3 ? maxLength : maxLength - 3;

  return string.slice(0, stringLength) + '...';
};
