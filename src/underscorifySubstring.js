function underscorifySubstring(string, substring) {
  const locations = collapse(getLocations(string, substring));
  return underscorify(string, locations);
}

function getLocations(string, substring) {
  const locations = [];
  let startIdx = 0;

  while (startIdx < string.length) {
    let nextIdx = string.indexOf(substring, startIdx);
    if (nextIdx !== -1) {
      locations.push([nextIdx, nextIdx + substring.length]);
      startIdx = nextIdx + 1;
    } else {
      break;
    }
  }
  return locations;
}

function collapse(locations) {
  if (!locations.length) return locations;

  const newLocations = [locations[0]];
  let previousLocation = newLocations[0];

  for (let i = 1; i < locations.length; i++) {
    let currentLocation = locations[i];
    if (currentLocation[0] <= previousLocation[1]) {
      previousLocation[1] = currentLocation[1];
    } else {
      newLocations.push(currentLocation);
      previousLocation = currentLocation;
    }
  }
  return newLocations;
}

function underscorify(string, locations) {
  let locationsIdx = 0;
  let stringIdx = 0;
  let inBetweenUnderscores = false;
  const finalChars = [];
  let i = 0;
  while (stringIdx < string.length && locationsIdx < locations.length) {
    if (stringIdx === locations[locationsIdx][i]) {
      finalChars.push('_');
      inBetweenUnderscores = !inBetweenUnderscores;
      if (!inBetweenUnderscores) locationsIdx++;
      i = i === 0 ? 1 : 0;
    }
    finalChars.push(string[stringIdx]);
    stringIdx++;
  }
  if (locationsIdx < locations.length) {
    finalChars.push('_');
  } else if (stringIdx < string.length) {
    finalChars.push(string.slice(stringIdx));
  }
  return finalChars.join('');
}
