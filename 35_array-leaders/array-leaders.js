export const arrayLeaders = (array) => {
  const leaders = [];

  for (let index = 0; index < array.length; index++) {
    let current = array[index];
    let firstToRight = array[index + 1];
    let secondToRight = array[index + 2];

    if (secondToRight || secondToRight === 0) {
      if (current > secondToRight + firstToRight) leaders.push(array[index]);
    } else if (firstToRight || firstToRight === 0) {
      if (current > firstToRight) leaders.push(current);
    } else if (current > 0) {
      leaders.push(current);
    }
  }

  return leaders;
};
