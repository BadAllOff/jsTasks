export function carrying(first, second) {
  if (typeof first !== 'number') {
    return undefined;
  }

  if (first && second) {
    if (typeof second !== 'number') {
      return undefined;
    } else {
      return first + second;
    }
  }

  return function (second) {
    if (typeof second !== 'number') {
      return undefined;
    }
    return first + second;
  };
}

// IMHO below :)
// the name of the task is confusing.

// expect(carrying(2, 3)).toBe(5); that is Partial Application, not Carrying.
// In carrying we always(!) expect the function with UNARY argument
// until all of the arguments have been applied.

// https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8

// page 30
// https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/JavaScript/Secrets%20of%20the%20JavaScript%20Ninja.pdf
