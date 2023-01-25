export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};

export const golfScore = (par, strokes) => {
  switch (!!strokes) {
    case strokes == 1:
      return GOLF_SCORES.HOLE_IN_ONE;
    case strokes <= par - 2:
      console.log(par, strokes);
      return GOLF_SCORES.EAGLE;
    case strokes == par - 1:
      return GOLF_SCORES.BIRDIE;
    case strokes == par:
      return GOLF_SCORES.PAR;
    case strokes == par + 1:
      return GOLF_SCORES.BOGEY;
    case strokes == par + 2:
      return GOLF_SCORES.DOUBLE_BOGEY;
    case strokes >= par + 3:
      return GOLF_SCORES.GO_HOME;
    default:
      return 'You are here because you are 🦄 Unicorn, and you are above the rules of logic';
  }
};
// Tests could also cover if arguments not given or wrong format.
// + maybe default message
