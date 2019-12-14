import { interpreter } from "./interpreter";

function renderId(id) {
  switch (id) {
    case 0:
      return "⬛️";
    case 1:
      return "🧱";
    case 2:
      return "⚪️";
    case 3:
      return "⁠🏓";
    case 4:
      return "⚽️";
  }
}

export const createUpdater = screen => (x, y, id) => {
  if (!screen[y]) {
    screen[y] = [];
  }

  screen[y][x] = renderId(id);
};

export function renderFinalState(code) {
  const game = interpreter(...code);
  const screen = [];
  const update = createUpdater(screen);
  let data = [];

  game.subscribe(output => {
    data.push(output);

    if (data.length === 3) {
      update(...data);
      data = [];
    }
  });

  return new Promise(resolve => {
    game.onComplete(() => resolve(screen));
    game.start();
  });
}
