// export const cloneArr = (array) => {
//   return array.map((element) => element);
// };

export const cloneArr = (arr) => [...arr];
// export const cloneArr = (arr) => arr.slice();
// export const cloneArr = (arr) => Array.from(arr);
// export const cloneArr = (arr) => JSON.parse(JSON.stringify(arr));

// This creates a deep copy of the original array by first converting the original array to a JSON string using JSON.stringify(), and then parsing the JSON string back into a new array using JSON.parse().

// Please note that the above mentioned method 4 will work fine for simple arrays, but it fails to clone complex objects and functions.

// It is also worth noting that these methods will only create a shallow copy of the array, which means that if the original array contains objects or other arrays, the new array will contain references to the same objects and arrays as the original. If you need to create a deep copy of the array, you will need to use a more complex method, such as using a recursive function or a library like Lodash.
