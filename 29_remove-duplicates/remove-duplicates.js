// export const removeDuplicates = (array) => {
//   return array.reduce((accum, elem, index) => {
//     if (index == 0 || !accum.includes(elem)) accum.push(elem);
//     return accum;
//   }, []);
// };

// the following code uses Set and Array.from() to remove duplicates:
export const removeDuplicates = (array) => Array.from(new Set(array));
