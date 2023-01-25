export const abbreviatedName = (string) => {
  return string
    .split(' ')
    .map((elem, index) => {
      if (index === 0) return elem;
      return `${elem.charAt(0)}.`;
    })
    .join(' ');
};
