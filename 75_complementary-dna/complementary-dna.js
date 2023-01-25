export const complementaryDNA = (string) => {
  const dnaArr = string.split('');

  const pairArr = dnaArr.map((el) => {
    switch (el) {
      case 'A':
        return ['T'];
      case 'T':
        return ['A'];
      case 'C':
        return ['G'];
      case 'G':
        return ['C'];
      default:
        break;
    }
  });

  return pairArr.join('');
};
