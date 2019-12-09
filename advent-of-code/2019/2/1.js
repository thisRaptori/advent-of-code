export function compute(...memory) {
  const state = {
    memory,
    pointer: 0
  };

  do {
    const { pointer } = state;
    const addresses = [
      state.memory[pointer + 1],
      state.memory[pointer + 2],
      state.memory[pointer + 3]
    ];
    const parameters = addresses.map(key => state.memory[key]);

    switch (state.memory[state.pointer]) {
      case 1: {
        state.memory[addresses[2]] = parameters[0] + parameters[1];
        state.pointer += 4;
        break;
      }

      case 2: {
        state.memory[addresses[2]] = parameters[0] * parameters[1];
        state.pointer += 4;
        break;
      }

      case 99: {
        return state.memory;
      }
    }
  } while (state.pointer < state.memory.length);

  return state.memory;
}
