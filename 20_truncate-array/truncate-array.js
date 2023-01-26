export const truncateArray = (array, number) => {
  return array.slice(number, array.length);
};

export const truncateArray = (array, number) => {
  return array.slice(number);
};
// This code eliminates the need for passing the second parameter array.length as the second argument for the slice() method, because when the second parameter is not provided, the slice method assumes that the end of the array is the second argument.

export const truncateArray = (array, number) => {
  return array.splice(number);
};

// This code eliminates the need for passing the second parameter array.length as the second argument for the splice() method, because when the second parameter is not provided, the splice method assumes that the end of the array is the second argument.
