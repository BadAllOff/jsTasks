const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

export function calculateOrbitalPeriod(arr) {
  return arr.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt((avgAlt + EARTH_RADIUS) ** 3 / GM)),
  }));
}
