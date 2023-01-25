export const validateBet = (gameType, txtMsg) => {
  if (/[^\d+,\s]/g.test(txtMsg)) {
    return null;
  }

  const betArr = txtMsg.match(/\d+/g);

  if (betArr.length === gameType[0]) {
    const betNums = betArr.map((num) => parseInt(num));
    const betUnique = betNums.filter((value, i) => betNums.indexOf(value) === i);

    if (betUnique.length === betNums.length && Math.max(...betUnique) <= gameType[1]) {
      return betNums.sort((a, b) => a - b);
    }
  }

  return null;
};
