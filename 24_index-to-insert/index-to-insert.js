// export const indexToInsert = (array, insertIndex) => {
//   // create new array to avoid mutation of original array
//   const sortedArr = array.map((x) => x).sort((a, b) => (a < b ? -1 : 1));

//   for (let index = 0; index < array.length; index++) {
//     const num = sortedArr[index];
//     if (num == insertIndex || num > insertIndex) return index;
//     if (index + 1 == array.length) return index + 1;
//   }
// };

export const indexToInsert = (array, insertIndex) => {
  const sortedArr = array.slice().sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === insertIndex) {
      return mid;
    } else if (sortedArr[mid] < insertIndex) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

// This optimized version uses binary search to find the index at which insertIndex should be inserted into the sorted array. By using binary search, we can improve the performance of the function for large arrays.

// Additionally, the sort method has been updated to use a subtract operation as the compare function to sort the array in ascending order, which is more efficient than using the ternary operator a < b ? -1 : 1. The original array has been cloned using the slice method instead of the map method, which is more efficient for cloning arrays.
