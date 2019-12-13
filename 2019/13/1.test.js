import { renderFinalState, createUpdater } from "./1";
import input from "./input";

const flatten = array =>
  array.reduce
    ? array.reduce((acc, cur) => acc.concat(flatten(cur)), [])
    : array;

describe("update", () => {
  it("should render the data to the screen", () => {
    const empty = undefined;
    const screen = [];
    const update = createUpdater(screen);
    update(1, 2, 3);
    update(6, 5, 4);

    // prettier-ignore
    expect(screen).toEqual([
        empty,
        empty,
        [, '⁠🏓'],
        empty,
        empty,
        [, , , , , , '⚽️']
    ])
  });
});

describe("renderFinalState", () => {
  it("should give the correct answer", async () => {
    const finalState = await renderFinalState(input);
    expect(flatten(finalState).filter(char => char === "⬛️").length).toEqual(
      412
    );
  });
});
