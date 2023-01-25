// beauty of Math :)
export const leastCommonMultiple = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return false;

  return !num1 || !num2 ? 0 : (num1 * num2) / gcd_two_numbers(num1, num2);
};

function gcd_two_numbers(number1, number2) {
  // greatest common divisor
  let num1 = number1;
  let num2 = number2;

  while (num2) {
    // binary search, stops once num2 becomes 0
    const twist = num2;
    num2 = num1 % num2;
    num1 = twist;
  }
  return num1;
}

/*
method below is also cool-looking (short) but too much iterations IMHO

export const leastCommonMultiple = (num1, num2) => {
    let min = (num1 > num2) ? num1 : num2;
    
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min; 
        }
        min++;
    }
}
*/
