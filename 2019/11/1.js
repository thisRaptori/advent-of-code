import { interpreter } from "./interpreter";
import { memory } from "./memory";

const array = (length, fn) => Array.from({ length }, (_, i) => fn(i));

const directions = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
};

const nextDirection = {
  up: ["left", "right"],
  left: ["down", "up"],
  down: ["right", "left"],
  right: ["up", "down"]
};

const dimensions = 2000;

export function runRobot(memory) {
  const program = interpreter(...memory);
  const colours = array(dimensions, () => array(dimensions, () => undefined));
  const output = [];
  const state = {
    x: dimensions / 2,
    y: dimensions / 2,
    direction: "up"
  };

  function sendNext() {
    const { x, y } = state;
    program.next(colours[y][x] ? 1 : 0);
  }

  function handleStep() {
    console.log("step");
    const { x, y } = state;
    const newColor = output.shift();
    const turn = output.shift();

    colours[y][x] = Boolean(newColor);
    state.direction = nextDirection[state.direction][turn];

    const [deltaX, deltaY] = directions[state.direction];

    state.x += deltaX;
    state.y += deltaY;

    if (
      state.x < 0 ||
      state.x > dimensions ||
      state.y < 0 ||
      state.y > dimensions
    ) {
      throw new Error("out of bounds");
    }

    sendNext();
  }

  program.subscribe(data => {
    output.push(data);

    if (output.length === 2) {
      setTimeout(handleStep, 0);
    }
  });

  sendNext();

  program.onComplete(() =>
    console.log(
      "complete:",
      colours.flat().filter(n => typeof n !== "undefined").length
    )
  );
}

runRobot(memory);
