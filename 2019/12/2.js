const findGCD = (_x, _y) => {
  let swap;
  let x = Math.abs(_x);
  let y = Math.abs(_y);
  while (y) {
    swap = y;
    y = x % y;
    x = swap;
  }
  return x;
};

const findLCM = (...numbers) =>
  numbers.reduce((x, y) => (x * y) / findGCD(x, y));

function findAxisRepetition(moons, index) {
  moons.restart();
  const states = {};
  let i;
  for (i = 0; i < 9999999; i++) {
    moons.step();
    const key = JSON.stringify(
      moons.getState().map(moon => [moon.position[index], moon.velocity[index]])
    );
    if (states[key]) {
      return i;
    }
    states[key] = true;
  }
  return false;
}

export function findRepetitions(moons) {
  return findLCM(
    findAxisRepetition(moons, 0),
    findAxisRepetition(moons, 1),
    findAxisRepetition(moons, 2)
  );
}
