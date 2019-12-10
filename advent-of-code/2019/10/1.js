const loop = (length, fn) => Array.from({ length }, (_, i) => fn(i));

function countVisibleAsteroids(asteroidField, x, y) {
  const map = {};
  loop(asteroidField.length, y2 => {
    loop(asteroidField[0].length, x2 => {
      if (asteroidField[y2][x2] && !(x === x2 && y === y2)) {
        const angle = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
        map[angle] = true;
      }
    });
  });
  return Object.entries(map).filter(([, hasAsteroid]) => hasAsteroid).length;
}

function parseInput(input) {
  return input.split(/[\r\n]/).map(line => line.split("").map(c => c === "#"));
}

export function findIdealMonitoringLocation(input) {
  const asteroidField = parseInput(input);

  let state = { count: 0 };
  loop(asteroidField.length, y => {
    loop(asteroidField[0].length, x => {
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
    });
  });
  return state;
}
