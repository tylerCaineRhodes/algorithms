export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
): number {
  const numberOfCities = distances.length;

  for (
    let startingCityIdx = 0;
    startingCityIdx < numberOfCities;
    startingCityIdx++
  ) {
    let gasLeft = 0;

    inner: for (
      let currentCityIdx = startingCityIdx;
      currentCityIdx < startingCityIdx + numberOfCities;
      currentCityIdx++
    ) {
      if (gasLeft < 0) continue inner;

      const actualIdx = currentCityIdx % numberOfCities;
      const currentDistance = distances[actualIdx];
      const currentFuel = fuel[actualIdx];

      gasLeft += currentFuel * mpg - currentDistance;
    }
    if (!gasLeft) return startingCityIdx;
  }
  return -1;
}
