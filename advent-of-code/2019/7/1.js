export const compute = (...memory) => (...input) => {
  const state = {
    memory: [...memory],
    pointer: 0
  };

  let nextInputIndex = 0;
  const getInput = () => {
    const nextInput = input[nextInputIndex];
    nextInputIndex++;
    return nextInput;
  };

  const getArgs = (_modes, count) => {
    const modes = _modes
      .split("")
      .reverse()
      .map(s => Boolean(parseInt(s, 10)));
    const args = [];

    for (let i = 0; i < count; i++) {
      const index = state.pointer + i + 1;
      const address = state.memory[index];
      args.push(modes[i] ? address : state.memory[address]);
    }

    return args;
  };

  do {
    const code = state.memory[state.pointer].toString();
    const opcode = parseInt(code.substr(-2), 10);
    const modes = code.substr(0, code.length - 2);

    switch (opcode) {
      // add
      case 1: {
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 3);

        state.memory[target] = left + right;
        state.pointer += 4;
        break;
      }

      // multiply
      case 2: {
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 3);

        state.memory[target] = left * right;
        state.pointer += 4;
        break;
      }

      // input
      case 3: {
        const target = state.memory[state.pointer + 1];

        state.memory[target] = getInput();
        state.pointer += 2;
        break;
      }

      // output
      case 4: {
        const [value] = getArgs(modes, 1);

        state.output = value;
        state.pointer += 2;
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
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 2);
        const isLessThan = left < right;

        state.memory[target] = isLessThan ? 1 : 0;
        state.pointer += 4;
        break;
      }

      // is equal to
      case 8: {
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 2);
        const isEqual = left === right;

        state.memory[target] = isEqual ? 1 : 0;
        state.pointer += 4;
        break;
      }

      // return
      case 99: {
        return typeof state.output === "undefined"
          ? state.memory
          : state.output;
      }

      default: {
        throw new Error(`invalid opcode: ${opcode}`);
      }
    }
  } while (state.pointer < state.memory.length);

  return state.memory;
};

export const runAmplifiers = (...memory) => (...phases) => {
  const amplifier = compute(...memory);

  return phases.reduce((acc, cur) => {
    return amplifier(cur, acc);
  }, 0);
};

export const findHighestOutput = (...memory) => {
  const amplifier = runAmplifiers(...memory);
  const options = [];

  // oh my god this is horrible
  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 5; b++) {
      for (let c = 0; c < 5; c++) {
        for (let d = 0; d < 5; d++) {
          for (let e = 0; e < 5; e++) {
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

  return options.reduce((acc, cur) => Math.max(acc, amplifier(...cur)), 0);
};
