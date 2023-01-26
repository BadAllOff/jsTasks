export const arrayChunks = (array, chunkSize) => {
  // create a copy array (arr) to avoid original array mutation
  let arr = array.map((element) => element);
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }
  return results;
};


export const arrayChunks = (array, chunkSize) => {
  let arr = [...array];
  let chunks = [];
  while (arr.length) {
    chunks.push(arr.splice(0, chunkSize));
  }
  return chunks;
}

// This code eliminates the need for the map() function and instead uses the spread operator to create a copy of the original array and assigns it to the variable arr. Also, it renames the results variable to chunks to give it a more semantic name.

export const arrayChunks = (array, chunkSize) => {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
// This code eliminates the need for the splice() function and instead uses the slice() method to get the chunks from the original array.

export const arrayChunks = (array, chunkSize) => {
    let chunks = [];
    array.forEach((elem, i) => {
        const chunkIndex = Math.floor(i / chunkSize);
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = []
        }
        chunks[chunkIndex].push(elem);
    });
    return chunks;
};

// This code eliminates the need for creating a copy of the array and using a loop, instead it uses forEach method to iterate over the array and groups the elements in chunks of size provided by chunkSize.
