export const DNAPairing = (string) => {
  const dnaArr = string.split('');

  const pairArr = dnaArr.map((el) => {
    switch (el) {
      case 'A':
        return [el, 'T'];
      case 'T':
        return [el, 'A'];
      case 'C':
        return [el, 'G'];
      case 'G':
        return [el, 'C'];
      default:
        throw new Error('DNA strand is missing the pairing element');
    }
  });

  return pairArr;
};
