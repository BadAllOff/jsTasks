export const sumOddFibonacci = (num) => {
  if (num <= 0) return 0;

  const arrFib = [1, 1];
  let nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
};
/* 
another cool solution I think

export const sumOddFibonacci = (num) => {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
}
*/
