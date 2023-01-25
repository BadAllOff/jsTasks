export const binaryEncode = (text) => {
  if (!text) return '';

  const binaryArray = text.split('').map((char) => {
    let binaryChar = char.charCodeAt().toString(2);

    while (binaryChar.length < 8) {
      binaryChar = `0${binaryChar}`;
    }

    return binaryChar;
  });

  return binaryArray.join(' ');
};
