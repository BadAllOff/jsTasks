// binary search in recursion, looks better than in my previous tasks :)
export const greatestCommonDivisor = (x, y) => {
  return !y ? x : greatestCommonDivisor(y, x % y);
};
