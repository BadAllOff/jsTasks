export const removeFalsyValues = (array) => {
  return array.filter((elem) => {
    return elem;
  });
};


export const removeFalsyValues = (array) => {
  return array.filter(Boolean);
};

// This optimized version uses Boolean as the callback function for filter instead of a custom anonymous function. The Boolean function returns true for values that are truthy, and false for values that are falsy. In this case, the filter method will only keep the truthy values in the array, effectively removing the falsy values.
