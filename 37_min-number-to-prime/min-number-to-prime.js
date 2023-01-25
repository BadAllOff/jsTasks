export const minNumberToPrime = (array) => {
  let sumOfArray = array.reduce((acc, num) => acc + num);
  let primeNumber = sumOfArray;
  let isPrime = isPrimeNumber(sumOfArray);

  if (!isPrime) {
    do {
      primeNumber++;
    } while (!isPrimeNumber(primeNumber));
  }

  return primeNumber - sumOfArray;
};

function isPrimeNumber(number) {
  let isPrime = false;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  return isPrime;
}
