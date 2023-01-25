export function symmetricDifference() {
  const ret = new Set();

  for (let a of arguments) {
    for (let x of new Set(a)) {
      if (ret.has(x)) ret.delete(x);
      else ret.add(x);
    }
  }

  return [...ret].sort();
}

// beautiful, but hard to read example
// export const symmetricDifference = (...arrays) => [...new Set(arrays.reduce((res, arr) => [...res, ...arr].filter(c => res.includes(c) != arr.includes(c))))].sort((a, b) => a - b);
