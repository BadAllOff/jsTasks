// found on codewars, and yes I can explain the code :)

export const followTheSpy = (array) => {
  const countries = [];

  array
    .map((currentRout) => {
      let rout = array.find((rout) => currentRout[0] === rout[1]);
      if (!rout) {
        // There is no reference to this country, meaning it is the firstone
        countries.push(currentRout[0]);
        // pushing the second destination froum our pair. will be a lookup value
        countries.push(currentRout[1]);
      }
    })
    .map(() => {
      array.map((currentRout) => {
        currentRout[0] === countries[countries.length - 1] && countries.push(currentRout[1]);
      });
    });

  return countries.join(', ');
};
