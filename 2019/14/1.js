const parseValue = input => {
  const [quantity, code] = input.split(" ");
  return [code, parseInt(quantity, 10)];
};

const parseInput = input =>
  input.split(", ").reduce((acc, cur) => {
    const [code, quantity] = parseValue(cur);
    acc[code] = quantity;
    return acc;
  }, {});

const parseOutput = input => {
  const [output, quantity] = parseValue(input);
  return { output, quantity };
};

const parseLine = line => {
  const [input, output] = line.split(" => ");
  return {
    ...parseOutput(output),
    input: parseInput(input)
  };
};

export const parse = input => input.split("\n").map(parseLine);

export const buildRequirements = input =>
  parse(input).reduce((acc, { input, output, quantity }) => {
    if (acc[output]) {
      // in case multiple paths might be needed in future,
      // throw here to make that requirement obvious
      throw new Error(`Duplicate output key: ${output}`);
    }
    acc[output] = [input, quantity];
    return acc;
  }, {});

const loop = (length, fn) => Array.from({ length }, (_, i) => fn(i));
const hasQuantity = ([, quantity]) => Boolean(quantity);
const getPending = requests => Object.entries(requests).filter(hasQuantity);

export const getRequirements = (input, rootCode, rootQuantity = 1) => {
  const map = buildRequirements(input);
  const state = {
    created: {},
    finalRequests: {},
    requested: { [rootCode]: rootQuantity },
    surplus: {}
  };

  function zeroFill(code) {
    ["created", "surplus", "requested"].forEach(key => {
      if (!state[key][code]) {
        state[key][code] = 0;
      }
    });
  }

  do {
    getPending(state.requested).forEach(([code, quantity]) => {
      zeroFill(code);

      if (state.surplus[code]) {
        if (quantity >= state.surplus[code]) {
          state.created[code] += state.surplus[code];
          state.requested[code] -= state.surplus[code];
          state.surplus[code] = 0;
        } else {
          state.surplus[code] -= quantity;
          state.created[code] += quantity;
          state.requested[code] = 0;
        }
        return;
      } else if (map[code]) {
        const [input, output] = map[code];

        loop(Math.ceil(quantity / output), () => {
          if (output > state.requested[code]) {
            state.surplus[code] += output - state.requested[code];
            state.created[code] += state.requested[code];
            state.requested[code] = 0;
          } else {
            state.requested[code] -= output;
            state.created[code] += output;
          }

          Object.entries(input).forEach(([rCode, rQuantity]) => {
            zeroFill(rCode);
            state.requested[rCode] += rQuantity;
          });
        });
      } else {
        if (!state.finalRequests[code]) {
          state.finalRequests[code] = 0;
        }
        state.finalRequests[code] += state.requested[code];
        state.requested[code] = 0;
      }
    });
  } while (getPending(state.requested).length);

  return state.finalRequests;
};
