// found somewere online. Makes sence. My solution was twice long but didn't covered all test cases

export const stringExpansion = ([...string]) => {
  let num = -1;
  let result = [];

  result = string.map((element) => {
    if (isNaN(element)) {
      switch (num) {
        case -1:
          return element;
          break;
        case 0:
          return '';
          break;
        default:
          return element.repeat(num);
      }
    } else {
      num = element;
    }
  });
  return result.join('');
};
