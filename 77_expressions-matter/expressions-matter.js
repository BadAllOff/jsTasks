// shorter by 1 expression because this a * b + c === a * (b + c) :D
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

export function expressionsMatter(a, b, c) {
  const EXPRESSIONS = [a * b * c, a + b * c, a + b + c, (a + b) * c, a * (b + c)];

  return Math.max(...EXPRESSIONS);
}

// export function expressionsMatter(a, b, c) {
//     const expressions = [a * b * c, a + b * c, (a + b) * c, a * b + c, a * (b + c), a + b + c];
//     return Math.max(...expressions);
//   }
