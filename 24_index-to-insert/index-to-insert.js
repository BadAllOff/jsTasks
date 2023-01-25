export const indexToInsert = (array, insertIndex) => {
  // create new array to avoid mutation of original array
  const sortedArr = array.map((x) => x).sort((a, b) => (a < b ? -1 : 1));

  for (let index = 0; index < array.length; index++) {
    const num = sortedArr[index];
    if (num == insertIndex || num > insertIndex) return index;
    if (index + 1 == array.length) return index + 1;
  }
};
