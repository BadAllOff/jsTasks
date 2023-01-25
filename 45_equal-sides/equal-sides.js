export const equalSides = (array) => {
  for (let i = 0; i < array.length; i++) {
    let sumOfLeft = 0,
      sumOfRight = 0;
    const element = array[i];

    // count sum of left side
    for (let l = i; l >= 0; l--) {
      sumOfLeft += array[l];
    }

    // count sum of right side
    for (let r = i; r < array.length; r++) {
      sumOfRight += array[r];
    }

    if (sumOfLeft == sumOfRight) return i;
    if (sumOfLeft > sumOfRight) return -1;
  }

  return -1;
};
