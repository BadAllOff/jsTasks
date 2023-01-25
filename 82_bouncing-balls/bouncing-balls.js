export const bouncingBalls = (h, bounce, window) => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let ballSeen = 0;

  while (h > window) {
    ballSeen++;
    h *= bounce;

    if (h > window) {
      ballSeen++;
    }
  }

  return ballSeen;
};
