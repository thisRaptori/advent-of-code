import { interpreter } from "./interpreter";

export function getView(memory) {
  const bot = interpreter(...memory);

  const characters = [];

  bot.subscribe(character => {
    characters.push(character);
  });

  return new Promise(resolve => {
    bot.onComplete(() =>
      resolve(characters.map(code => String.fromCharCode(code)).join(""))
    );
    bot.start();
  });
}

export function verifyAlignments(input) {
  const map = input.split("\n").map(line => line.split(""));
  let intersections = [];

  for (let x = 1; x < map[0].length - 2; x++) {
    for (let y = 1; y < map.length - 2; y++) {
      const characters = [
        map[y][x],
        map[y - 1][x],
        map[y + 1][x],
        map[y][x - 1],
        map[y][x + 1]
      ];
      if (characters.every(character => character !== ".")) {
        intersections.push([x, y]);
      }
    }
  }

  return intersections.reduce((acc, [x, y]) => acc + x * y, 0);
}
