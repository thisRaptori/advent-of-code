const lowercase = new RegExp(/[a-z]/);
const uppercase = new RegExp(/[A-Z]/);

export const parseInput = input =>
  input.split("\n").reduce(
    (acc, line, y) => {
      acc.map[y] = [];

      line.split("").forEach((char, x) => {
        if (char.match(lowercase)) {
          acc.keys.hidden.push(char);
        }

        switch (char) {
          case "#":
            break;
          case "@":
            acc.start = [x, y];
            acc.map[y][x] = " ";
            break;
          case ".":
            acc.map[y][x] = " ";
            break;
          default:
            acc.map[y][x] = char;
            break;
        }
      });

      acc.keys.hidden.sort();

      return acc;
    },
    { keys: { found: [], hidden: [] }, map: [] }
  );

export const getAvailablePaths = (map, coordinate, visited) =>
  [
    ([x, y]) => [x, y - 1],
    ([x, y]) => [x, y + 1],
    ([x, y]) => [x - 1, y],
    ([x, y]) => [x + 1, y]
  ]
    .map(fn => fn(coordinate))
    .filter(([x, y]) => Boolean(map[y][x] && (!visited || !visited[y][x])));

function processStep({ character = "@", keys, map, start }) {
  const state = {
    nodes: getAvailablePaths(map, start),
    minimum: Infinity,
    step: 0,
    visited: Array.from({ length: map.length }, () => []),
    path: []
  };

  const markVisited = ([x, y], value) => {
    state.visited[y][x] = value;
  };

  markVisited(start, "start");
  state.nodes.forEach(node => markVisited(node, 1));

  while (state.nodes.length && keys.hidden.length) {
    const nodesInCurrentStep = state.nodes;
    state.nodes = [];
    state.step++;

    while (nodesInCurrentStep.length) {
      const [x, y] = nodesInCurrentStep.pop();
      const char = map[y][x];

      if (char.match(uppercase) && !keys.found.includes(char.toLowerCase())) {
        // stop at locked doors
      } else if (char.match(lowercase) && !keys.found.includes(char)) {
        if (keys.hidden.length === 1 && keys.hidden[0] === char) {
          return [state.step, [character, char]];
        }

        const childProcess = {
          character: char,
          keys: {
            found: keys.found.concat(char),
            hidden: keys.hidden.filter(c => c !== char)
          },
          map: [...map],
          start: [x, y]
        };

        childProcess.map[y] = [...map[y]];
        childProcess.map[y][x] = " ";

        const [childMinimum, childPath] = processStep(childProcess);

        if (childMinimum + state.step < state.minimum) {
          state.minimum = childMinimum + state.step;
          state.path = childPath;
        }
      } else {
        const newNodes = getAvailablePaths(map, [x, y], state.visited);
        newNodes.forEach(node => {
          state.nodes.push(node);
          markVisited(node, state.step + 1);
        });
      }
    }
  }

  return [state.minimum, [character, ...state.path]];
}

export const searchMaze = input => {
  const [steps, path] = processStep(parseInput(input));
  return { steps, path };
};
