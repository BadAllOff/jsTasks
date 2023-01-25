export const sumOfPrimeIndexes = (numArray) => {
  if (numArray.length === 0) return 0;

  let sum = 0,
    count = 2;

  while (count < numArray.length) {
    if (isPrime(count)) {
      sum += numArray[count];
    }
    count++;
  }

  return sum;
};

const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else {
    for (let divider = 2; divider <= Math.sqrt(n); divider++) {
      if (n % divider === 0) {
        return false;
      }
    }

    return true;
  }
};
