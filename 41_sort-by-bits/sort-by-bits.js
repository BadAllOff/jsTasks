// Why not equal
export const sortByBits = (array) => {
  array.sort((a, b) => {
    const onBitSumA = onBitCount(a);
    const onBitSumB = onBitCount(b);

    return onBitSumA === onBitSumB ? a - b : onBitSumA - onBitSumB;
  });
};

function onBitCount(num) {
  return num
    .toString(2)
    .split('')
    .reduce((sum, bit) => (bit === '1' ? sum + 1 : sum), 0);
}
