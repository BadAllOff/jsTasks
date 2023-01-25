export function sumPrimes(givenNum) {
  let sumOfPrimes = 0;

  for (let currentNum = 2; currentNum <= givenNum; currentNum++) {
    let prime = true;

    for (let divider = 2; divider <= Math.sqrt(currentNum); divider++) {
      if (currentNum % divider === 0) {
        prime = false;
        break;
      }
    }

    if (prime) sumOfPrimes += currentNum;
  }

  return sumOfPrimes;
}
