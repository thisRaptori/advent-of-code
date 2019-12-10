export const compute = (...memory) => {
  const state = {
    input: [],
    memory: [...memory],
    pointer: 0,
    relativeBase: 0,
    listeners: [],
    onComplete: [],
    output: []
  };

  const getMemoryAt = index => {
    if (typeof state.memory[index] === "undefined") {
      state.memory[index] = 0;
    }

    return state.memory[index];
  };

  const getIndexes = (_modes, count) => {
    const indexes = [];
    const modes = _modes.split("").reverse();

    for (let i = 0; i < count; i++) {
      let value;
      const index = state.pointer + i + 1;
      const address = getMemoryAt(index);

      switch (modes[i]) {
        case "2":
          value = address + state.relativeBase;
          break;

        default:
          value = address;
          break;
      }

      indexes.push(value);
    }

    return indexes;
  };

  const getArgs = (_modes, count) => {
    const args = [];
    const modes = _modes.split("").reverse();

    for (let i = 0; i < count; i++) {
      let value;
      const index = state.pointer + i + 1;
      const address = getMemoryAt(index);

      switch (modes[i]) {
        case "1":
          value = address;
          break;

        case "2":
          value = getMemoryAt(address + state.relativeBase);
          break;

        default:
          value = getMemoryAt(address);
          break;
      }

      args.push(value);
    }

    return args;
  };

  const start = () => {
    state.continue = true;

    do {
      const code = getMemoryAt(state.pointer).toString();
      const opcode = parseInt(code.substr(-2), 10);
      const modes = code.substr(0, code.length - 2);

      switch (opcode) {
        // add
        case 1: {
          const [, , target] = getIndexes(modes, 3);
          const [left, right] = getArgs(modes, 2);

          state.memory[target] = left + right;
          state.pointer += 4;
          break;
        }

        // multiply
        case 2: {
          const [, , target] = getIndexes(modes, 3);
          const [left, right] = getArgs(modes, 2);

          state.memory[target] = left * right;
          state.pointer += 4;
          break;
        }

        // input
        case 3: {
          if (!state.input.length) {
            state.continue = false;
            break;
          }

          const [target] = getIndexes(modes, 1);

          state.memory[target] = state.input.shift();
          state.pointer += 2;
          break;
        }

        // output
        case 4: {
          const [value] = getArgs(modes, 1);

          state.output = value;
          state.pointer += 2;
          state.listeners.forEach(next => next(value));
          break;
        }

        // is true
        case 5: {
          const [isTrue, target] = getArgs(modes, 2);

          if (isTrue) {
            state.pointer = target;
          } else {
            state.pointer += 3;
          }
          break;
        }

        // is false
        case 6: {
          const [isTrue, target] = getArgs(modes, 2);

          if (isTrue) {
            state.pointer += 3;
          } else {
            state.pointer = target;
          }
          break;
        }

        // is less than
        case 7: {
          const [, , target] = getIndexes(modes, 3);
          const [left, right] = getArgs(modes, 2);

          state.memory[target] = left < right ? 1 : 0;
          state.pointer += 4;
          break;
        }

        // is equal to
        case 8: {
          const [, , target] = getIndexes(modes, 3);
          const [left, right] = getArgs(modes, 2);

          state.memory[target] = left === right ? 1 : 0;
          state.pointer += 4;
          break;
        }

        // adjust relative base
        case 9: {
          const [adjustment] = getArgs(modes, 1);

          state.relativeBase += adjustment;
          state.pointer += 2;
          break;
        }

        // exit
        case 99: {
          state.continue = false;
          state.complete = true;
          state.onComplete.forEach(next => next(state.output));
          break;
        }

        // error
        default: {
          state.continue = false;
          throw new Error(`invalid opcode: ${opcode}`);
        }
      }
    } while (state.continue && !state.complete);
  };

  return {
    next: (...newInput) => {
      state.input.push(...newInput);
      start();
    },
    push: (...newInput) => {
      state.input.push(...newInput);
    },
    start,
    subscribe: listener => {
      state.listeners.push(listener);
    },
    onComplete: listener => {
      if (state.complete) {
        listener(state.output);
      } else {
        state.onComplete.push(listener);
      }
    }
  };
};

export const runAmplifiers = (...memory) => (...phases) => {
  const amplifiers = phases.map(phase => {
    const amplifier = compute(...memory);
    amplifier.push(phase);
    return amplifier;
  });

  amplifiers[amplifiers.length - 1].subscribe(amplifiers[0].next);
  for (let i = 1; i < phases.length; i++) {
    amplifiers[i - 1].subscribe(amplifiers[i].next);
  }

  return (...input) =>
    new Promise(resolve => {
      amplifiers[0].next(...input);
      amplifiers[amplifiers.length - 1].onComplete(resolve);
    });
};

export const findHighestOutput = (...memory) => {
  const amplifier = runAmplifiers(...memory);
  const options = [];

  // oh my god this is horrible
  for (let a = 5; a < 10; a++) {
    for (let b = 5; b < 10; b++) {
      for (let c = 5; c < 10; c++) {
        for (let d = 5; d < 10; d++) {
          for (let e = 5; e < 10; e++) {
            const suggestion = [a, b, c, d, e];
            if (new Set(suggestion).size === suggestion.length) {
              options.push(suggestion);
            }
          }
        }
      }
    }
  }
  // note to self: figure out a nicer getPermutations() approach

  return Promise.all(
    options.map(phases => amplifier(...phases)(0))
  ).then(results => results.reduce((acc, cur) => Math.max(acc, cur), 0));
};
