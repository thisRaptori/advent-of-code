import { interpreter } from "./interpreter";

export const routine = (...codes) =>
  [...codes.join(",").split(""), "\n"].map(s => s.charCodeAt());

export function explore(memory, displayFeed) {
  memory[0] = 2; // enable manual drive
  const robot = interpreter(...memory);

  const routines = [
    ...routine("A", "B", "A", "B", "A", "C", "A", "C", "B", "C"),
    ...routine("R", 6, "L", 10, "R", 10, "R", 10),
    ...routine("L", 10, "L", 12, "R", 10),
    ...routine("R", 6, "L", 12, "L", 10),
    ...routine(displayFeed ? "y" : "n")
  ];

  robot.push(...routines);

  return new Promise(resolve => {
    robot.onComplete(resolve);
    robot.start();
  });
}
