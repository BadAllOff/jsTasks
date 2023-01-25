export const catAndDogYears = (year) => {
  let catYears = 0,
    dogYears = 0;
  for (let currentYear = 1; currentYear <= year; currentYear++) {
    if (currentYear == 1) {
      catYears += 15;
      dogYears += 15;
      continue;
    }
    if (currentYear == 2) {
      catYears += 9;
      dogYears += 9;
      continue;
    }
    catYears += 4;
    dogYears += 5;
  }

  return [year, catYears, dogYears];
};
