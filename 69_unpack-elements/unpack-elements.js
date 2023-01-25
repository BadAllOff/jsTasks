export const unpackElements = (array) => {
  const flatArray = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      flatArray.push(...unpackElements(item));
    } else {
      flatArray.push(item);
    }
  }

  return flatArray;
};
