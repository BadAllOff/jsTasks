export const findFriend = (array) => {
  let friends = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'red') {
      if (array[i - 1] === 'blue' && array[i + 1] === 'blue') {
        friends++;
      } else if (array[i - 1] === 'blue' && array[i - 2] === 'blue') {
        friends++;
      } else if (array[i + 1] === 'blue' && array[i + 2] === 'blue') {
        friends++;
      }
    }
  }

  return friends;
};
