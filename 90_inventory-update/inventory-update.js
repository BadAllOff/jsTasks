export const updateInventory = (curInv, newInv) => {
  if (!newInv) return curInv;

  newInv.map((product) => {
    const [number, name] = product;
    const matchProduct = curInv.find((el) => el[1] === name);

    if (matchProduct) {
      matchProduct[0] += number;
    } else {
      curInv.push(product);
    }
  });

  curInv.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    return a[1] > b[1] ? 1 : 0;
  });

  return curInv;
};
