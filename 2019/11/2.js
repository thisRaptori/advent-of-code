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

export function runRobot(memory) {
  const program = interpreter(...memory);
  const colours = array(6, () => array(46, () => undefined));
  const output = [];
  const state = {
    x: 0,
    y: 0,
    direction: "up"
  };
  colours[0][0] = true;

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
      "complete:\n",
      colours
        .map(row => row.map(cell => (cell ? "#" : ".")).join(""))
        .join("\n")
    )
  );
}

runRobot(memory);
