export const deepObjectClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
