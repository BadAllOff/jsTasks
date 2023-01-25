const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0,
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

export const lookupProfile = (firstName, prop) => {
  for (const c of contacts) {
    if (c.firstName === firstName && c.hasOwnProperty(prop)) {
      return c[prop];
    } else if (c.firstName === firstName && !c.hasOwnProperty(prop)) {
      return 'No such property';
    }
  }

  return 'No such contact';
};
