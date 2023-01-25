export const findObjectAnalogy = (array, matchingObject) => {
  return array.filter((object) =>
    Object.keys(matchingObject).every((key) => object.hasOwnProperty(key) && object[key] === matchingObject[key])
  );
};
