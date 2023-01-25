export const peopleInBus = (array) => {
  let getIn = 0;
  let getOut = 0;

  for (let elem of array) {
    getIn += elem[0];
    getOut += elem[1];
  }

  return getIn - getOut;
};
