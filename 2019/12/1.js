const loop = (length, fn) => Array.from({ length }, (_, i) => fn(i));

function getDirection(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

function trackMoon(position) {
  const state = {
    position,
    velocity: [0, 0, 0]
  };

  function applyGravity(otherPosition) {
    const [xO, yO, zO] = otherPosition;
    const [xP, yP, zP] = state.position;
    const [xV, yV, zV] = state.velocity;

    // prettier-ignore
    state.velocity = [
      xV + getDirection(xP, xO),
      yV + getDirection(yP, yO),
      zV + getDirection(zP, zO)
    ];
  }

  function moveStep() {
    const [xP, yP, zP] = state.position;
    const [xV, yV, zV] = state.velocity;

    // prettier-ignore
    state.position = [
      xP + xV,
      yP + yV,
      zP + zV
    ];
  }

  const getState = () => state;
  const getPosition = () => state.position;
  const getPotentialEnergy = () =>
    state.position.reduce((acc, cur) => acc + Math.abs(cur), 0);
  const getKineticEnergy = () =>
    state.velocity.reduce((acc, cur) => acc + Math.abs(cur), 0);
  const getTotalEnergy = () => getPotentialEnergy() * getKineticEnergy();

  return {
    applyGravity,
    getPosition,
    getTotalEnergy,
    getState,
    moveStep
  };
}

export function trackMoons(input) {
  let moons;
  const start = () => {
    moons = input.map(coordinates => trackMoon([...coordinates]));
  };
  start();

  function step(times = 1) {
    loop(times, () => {
      moons.forEach(moon => {
        moons.forEach(otherMoon => {
          if (moon !== otherMoon) {
            moon.applyGravity(otherMoon.getPosition());
          }
        });
      });

      moons.forEach(moon => {
        moon.moveStep();
      });
    });
  }

  const getState = () => moons.map(moon => moon.getState());
  const getTotalEnergy = () =>
    moons.reduce((total, moon) => total + moon.getTotalEnergy(), 0);

  return {
    getState,
    getTotalEnergy,
    restart: start,
    step
  };
}
