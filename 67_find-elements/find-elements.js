export const findElements = (array, fn) => {
  for (const item of array) {
    if (fn(item)) return item;
  }

  return undefined;
};
