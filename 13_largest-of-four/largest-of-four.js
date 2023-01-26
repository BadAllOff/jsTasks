export const largestOfFour = (arrays) => {
  const resultArray = arrays.map((subArray) => {
    return subArray.reduce((prev, current) => {
      return prev > current ? prev : current;
    }, 0);
  });

  return resultArray;
};


export const largestOfFour = (arrays) => {
  return arrays.map((subArray) => Math.max(...subArray));
};

// This code uses the Math.max() function, along with the spread operator (...), to find the maximum value in each sub-array. This eliminates the need to use the reduce method and manually compare values within each sub-array. The spread operator allows to pass an array of elements to Math.max() as individual arguments.

export const largestOfFour = (arrays) => {
  return arrays.map((subArray) => Math.max.apply(null, subArray));
};

// This code uses the Math.max.apply(null, subArray) to find the maximum value in each sub-array. This eliminates the need to use the reduce method and manually compare values within each sub-array.
