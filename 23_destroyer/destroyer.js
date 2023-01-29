export const destroyer = (array, ...rest) => {
  return array.filter((elem) => !rest.includes(elem));
};

export const destroyer = (array, ...rest) => {
  const set = new Set(rest);
  return array.filter(elem => !set.has(elem));
};

// This optimized version uses a Set object to store the elements in rest. The Set object has a has method that allows us to check if an element is present in the set in constant time, whereas the Array.includes method takes linear time. By using a set, we can improve the performance of the function for large arrays.
