const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

export const updateRecords = (id, property, value) => {
  const record = collection[id];

  if (value !== '') {
    if (property !== 'tracks') {
      record[property] = value;
    } else {
      if (Object.hasOwn(record, 'tracks')) {
        record[property].push(value);
      } else {
        record[property] = [value];
      }
    }
  } else {
    delete record[property];
  }

  return collection;
};
