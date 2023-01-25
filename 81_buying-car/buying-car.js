export function buyingCar(oldCarValue, newCarValue, monthlySave, decrease) {
  let savings = 0;
  let months = 0;

  while (savings + oldCarValue < newCarValue) {
    newCarValue -= (newCarValue * decrease) / 100;
    oldCarValue -= (oldCarValue * decrease) / 100;

    if (months % 2 === 0) {
      decrease += 0.5;
    }

    savings += monthlySave;
    months++;
  }

  return [months, parseInt(savings + oldCarValue - newCarValue)];
}
