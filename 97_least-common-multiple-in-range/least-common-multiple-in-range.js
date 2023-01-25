export const leastCommonMultipleInRage = (arr) => {
  // Swap [big, small] to [small, big]
  if (arr[0] > arr[1]) arr = [arr[1], arr[0]];

  const range = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  let multiple = arr[0];
  range.forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
};

// Euclid algorithm for Greates Common Divisor
function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

// Least Common Multiple function
function lcm(a, b) {
  return a * (b / gcd(a, b));
}
