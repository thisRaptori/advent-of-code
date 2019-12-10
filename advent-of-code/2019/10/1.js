function countVisibleAsteroids(asteroidField, x, y) {
  const map = {};
  for (let y2 = 0; y2 < asteroidField.length; y2++) {
    for (let x2 = 0; x2 < asteroidField[0].length; x2++) {
      if (asteroidField[y2][x2] && !(x === x2 && y === y2)) {
        const angle = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
        map[angle] = true;
      }
    }
  }
  return Object.entries(map).filter(([, hasAsteroid]) => hasAsteroid).length;
}

function parseInput(input) {
  return input.split(/[\r\n]/).map(line => line.split("").map(c => c === "#"));
}

export function findIdealMonitoringLocation(input) {
  const asteroidField = parseInput(input);

  let state = { count: 0 };
  for (let y = 0; y < asteroidField.length; y++) {
    for (let x = 0; x < asteroidField[0].length; x++) {
      if (asteroidField[y][x]) {
        const count = countVisibleAsteroids(asteroidField, x, y);
        if (count > state.count) {
          state = {
            count,
            x,
            y
          };
        }
      }
    }
  }
  return state;
}
