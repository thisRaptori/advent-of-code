import { trackMoons } from "./1";
import { findRepetitions } from "./2";

describe("trackmoons", () => {
  it("should pass the first example", () => {
    const moons = trackMoons([
      [-1, 0, 2],
      [2, -10, -7],
      [4, -8, 8],
      [3, 5, -1]
    ]);

    expect(findRepetitions(moons)).toEqual(2772);
  });

  it("should pass with the actual input", () => {
    const moons = trackMoons([
      [6, 10, 10],
      [-9, 3, 17],
      [9, -4, 14],
      [4, 14, 4]
    ]);

    expect(findRepetitions(moons)).toEqual(344724687853944);
  });
});
