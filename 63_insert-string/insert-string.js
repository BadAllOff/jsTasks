export const insertString = (str, word = '', position = 0) => {
  return str.slice(0, position) + word + str.slice(position);
};
