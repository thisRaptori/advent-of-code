import { createUpdater } from "./1";
import { interpreter } from "./interpreter";

export function findMaxScore(code, onUpdate) {
  const game = interpreter(...code);

  const state = {
    pending: [],
    screen: [],
    input: 0
  };
  const update = createUpdater(state.screen);

  game.staticInput({
    length: 1,
    push: console.log,
    shift: () => {
      if (state.paddle > state.ball) {
        state.input = -1;
      } else if (state.paddle < state.ball) {
        state.input = 1;
      } else {
        state.input = 0;
      }

      return state.input;
    }
  });

  game.subscribe(output => {
    state.pending.push(output);
    const [x, y, id] = state.pending;

    if (typeof id !== "undefined") {
      state.pending = [];

      if (state.screen[y] && state.screen[y][x]) {
        onUpdate &&
          onUpdate(
            state.screen.map(line => line.join("")).join("\n"),
            state.score,
            state.input
          );
      }

      if (x === -1 && y === 0) {
        state.score = id;
      } else {
        update(x, y, id);
        if (id === 3) {
          state.paddle = x;
        } else if (id === 4) {
          state.ball = x;
        }
      }
    }
  });

  return new Promise(resolve => {
    game.onComplete(() => resolve(state.score));
    game.start();
  });
}
