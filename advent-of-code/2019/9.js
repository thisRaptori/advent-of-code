export const compute = (...memory) => input => {
  const state = {
    memory,
    pointer: 0
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
      case 1: {
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 3);

        state.memory[target] = left + right;
        state.pointer += 4;
        break;
      }

      case 2: {
        const target = state.memory[state.pointer + 3];
        const [left, right] = getArgs(modes, 3);

        state.memory[target] = left * right;
        state.pointer += 4;
        break;
      }

      case 3: {
        const target = state.memory[state.pointer + 1];

        state.memory[target] = input;
        state.pointer += 2;
        break;
      }

      case 4: {
        const target = state.memory[state.pointer + 1];

        state.output = state.memory[target];
        state.pointer += 2;
        break;
      }

      case 99: {
        return typeof state.output === "undefined"
          ? state.memory
          : state.output;
      }

      default: {
        throw new Error("invalid opcode");
      }
    }
  } while (state.pointer < state.memory.length);

  return state.memory;
};
