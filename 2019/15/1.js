import { interpreter } from "./interpreter";

const NORTH = 1;
const SOUTH = 2;
const WEST = 3;
const EAST = 4;

const directions = [NORTH, SOUTH, WEST, EAST];

const opposite = {
  [NORTH]: SOUTH,
  [SOUTH]: NORTH,
  [WEST]: EAST,
  [EAST]: WEST
};

const next = {
  [NORTH]: (x, y) => [x, y + 1],
  [SOUTH]: (x, y) => [x, y - 1],
  [WEST]: (x, y) => [x - 1, y],
  [EAST]: (x, y) => [x + 1, y]
};

export function explore(memory) {
  const bot = interpreter(...memory);
  const state = {
    location: [0, 0],
    locations: {},
    path: []
  };

  const getKey = (x, y) => JSON.stringify([x, y]);
  const getCurrentKey = () => getKey(...state.location);

  const addWall = location =>
    (state.locations[getKey(...location)] = { current: "#" });
  const addLocation = location =>
    (state.locations[location] = directions.reduce(
      (acc, cur) => {
        const knownLocation =
          state.locations[getKey(...next[cur](...JSON.parse(location)))];
        if (knownLocation) {
          acc[cur] = knownLocation.current;
        }
        return acc;
      },
      { current: "." }
    ));
  const addOxygenSystem = location =>
    (state.locations[getKey(...location)] = { current: "!" });

  const getLocation = location =>
    state.locations[location] || addLocation(location);
  const getCurrentLocation = () => getLocation(getCurrentKey());
  const getCurrentDirection = () => state.path[state.path.length - 1];
  const getTargetLocation = () =>
    next[getCurrentDirection()](...state.location);

  const move = () => (state.location = getTargetLocation());
  const moveBack = () =>
    (state.location = next[opposite[state.path.pop()]](...state.location));

  const nextDirection = () =>
    directions.find(direction => !getCurrentLocation()[direction]);
  const setValue = (
    value,
    location = getCurrentLocation(),
    direction = getCurrentDirection()
  ) => (location[direction] = value);

  function step() {
    const unexploredDirection = nextDirection();
    if (unexploredDirection) {
      state.backtracking = false;
      state.path.push(unexploredDirection);
      bot.next(unexploredDirection);
    } else {
      state.backtracking = true;
      bot.next(opposite[getCurrentDirection()]);
    }
  }

  bot.subscribe(code => {
    switch (code) {
      // has not moved
      case 0:
        addWall(getTargetLocation());
        setValue("#");
        state.path.pop();
        break;

      // found empty space
      case 1:
        if (state.backtracking) {
          moveBack();
        } else {
          setValue(".");
          move();
        }
        break;

      // found oxygen tank
      case 2:
        if (state.backtracking) {
          moveBack();
        } else {
          state.oxygenSystemLocation = getTargetLocation();
          state.oxygenSystemDistance = state.path.length;
          addOxygenSystem(state.oxygenSystemLocation);
          setValue("!");
          move();
        }
        break;
    }

    setTimeout(step, 0);
  });

  return new Promise(resolve => {
    bot.onComplete(() => resolve(state));

    step();
  });
}
