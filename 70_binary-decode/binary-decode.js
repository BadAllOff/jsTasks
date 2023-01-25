export const binaryDecode = (binaryString) => {
  if (!binaryString) return '';

  const binaryArr = binaryString.split(' ');

  return binaryArr
    .map((elem) => {
      return String.fromCharCode(parseInt(elem, 2));
    })
    .join('');
};
