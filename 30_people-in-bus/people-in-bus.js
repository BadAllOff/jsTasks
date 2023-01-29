// export const peopleInBus = (array) => {
//   let getIn = 0;
//   let getOut = 0;

//   for (let elem of array) {
//     getIn += elem[0];
//     getOut += elem[1];
//   }

//   return getIn - getOut;
// };

// elegent
export const peopleInBus = (array) => {
  return array.reduce((sum, [getIn, getOut]) => sum + getIn - getOut, 0);
};

// useing the reduce method to accumulate the values of the number of people getting in and the number of people getting out of the bus, and returns the difference between the two values as the final result, which should be the number of people still in the bus.
