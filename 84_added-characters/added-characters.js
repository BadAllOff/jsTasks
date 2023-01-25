// agree with Radek, good choise
export function addedCharacters(str, extended) {
  const strArr = str.split('');
  const remainChars = strArr.reduce((remain, cur) => remain.replace(cur, ''), extended);

  return remainChars.charAt(0);
}
