const loop = (length, fn) => Array.from({ length }, (_, i) => fn(i));

function getLinesOfSight(asteroidField, x, y) {
  const linesOfSight = {};
  loop(asteroidField.length, y2 => {
    loop(asteroidField[0].length, x2 => {
      if (asteroidField[y2][x2] && !(x === x2 && y === y2)) {
        const angle = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI + 180;
        const distance = Math.hypot(y2 - y, x2 - x);
        if (!linesOfSight[angle]) {
          linesOfSight[angle] = [];
        }
        linesOfSight[angle].push([x2, y2, distance]);
      }
    });
  });
  return linesOfSight;
}

function parseInput(input) {
  return input.split(/[\r\n]/).map(line => line.split("").map(c => c === "#"));
}

function sortNumbers(numbers) {
  return numbers.sort((a, b) => {
    const intA = parseFloat(a);
    const intB = parseFloat(b);

    if (intA < intB) return -1;
    if (intA > intB) return 1;
    return 0;
  });
}

function sortByDistance(locations) {
  return locations.sort(([, , distanceA], [, , distanceB]) => {
    if (distanceA < distanceB) return -1;
    if (distanceA > distanceB) return 1;
    return 0;
  });
}

function mapValues(object, fn) {
  return Object.entries(object).reduce((acc, [key, value]) => {
    acc[key] = fn(value);
    return acc;
  }, {});
}

function getNorthIndex(linesOfSight) {
  return sortNumbers(Object.keys(linesOfSight)).findIndex(
    angle => parseInt(angle, 10) >= 90
  );
}

export function destroyAsteroids(input, location) {
  const asteroidField = parseInput(input);

  const linesOfSight = mapValues(
    getLinesOfSight(asteroidField, ...location),
    sortByDistance
  );

  let index = getNorthIndex(linesOfSight);
  const output = [];
  do {
    const angles = sortNumbers(Object.keys(linesOfSight));

    if (!angles.length) break;

    const angle = angles[index];
    const lineOfSight = linesOfSight[angle];
    const [x, y] = lineOfSight.shift();

    output.push([x, y]);

    if (!lineOfSight.length) {
      delete linesOfSight[angle];
      index = index === angles.length - 1 ? 0 : index;
      continue;
    }

    index = index === angles.length - 1 ? 0 : index + 1;
  } while (true);

  return output;
}
