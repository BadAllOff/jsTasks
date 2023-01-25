export const fatFingers = (str) => {
  if (!str) return str;

  return str
    .split(/a/i)
    .map((part, i) => {
      if (i % 2 === 0) return part;

      return part.replace(/[a-z]/gi, (c) => (/[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase()));
    })
    .join('');
};
