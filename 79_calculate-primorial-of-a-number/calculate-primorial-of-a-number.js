export const calculatePrimorialOfANumber = (num) => {
  if (num === 0) return 0;

  let count = 1,
    current = 3,
    primorial = 2;

  while (count < num) {
    if (isPrime(current)) {
      console.log(current);
      primorial *= current;
      count++;
    }
    current++;
  }

  return primorial;
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
