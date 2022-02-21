export function isEqualFlightLength(flightLength, moviesArray) {
  let storage = {}, hasMovies = false;

  moviesArray.forEach((duration) => {
    let secondDuration = flightLength - duration;
    if (storage[secondDuration]) {
      hasMovies = true;
    } else {
      storage[duration] = true;
    }
  });
  return hasMovies;
}
