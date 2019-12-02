export function compute(...operations) {
    const state = {
        operations,
        position: 0,
    }

    do {
        const { position } = state
        const keys = [
            state.operations[position + 1],
            state.operations[position + 2],
            state.operations[position + 3],
        ]
        const values = keys.map(key => state.operations[key])

        switch (state.operations[state.position]) {
            case 1: {
                state.operations[keys[2]] = values[0] + values[1]
                state.position += 4
                break;
            }

            case 2: {
                state.operations[keys[2]] = values[0] * values[1]
                state.position += 4
                break;
            }

            case 99: {
                console.log(JSON.stringify(state.operations));
                return state.operations;
            }
        }
    } while (state.position < state.operations.length)

    return state.operations
}
