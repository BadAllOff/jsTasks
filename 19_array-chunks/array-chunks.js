export const arrayChunks = (array, chunkSize) => {
  // create a copy array (arr) to avoid original array mutation
  let arr = array.map((element) => element);
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }
  return results;
};
