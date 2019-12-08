import { chunk, count, flatten, pivot, smallest, verify } from "./15";
import input from "./15-input";

describe("chunk", () => {
  it("should chunk an array", () => {
    // prettier-ignore
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    // prettier-ignore
    expect(chunk(1)(array)).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24]])
    // prettier-ignore
    expect(chunk(2)(array)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24]])
    // prettier-ignore
    expect(chunk(3)(array)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]])
    // prettier-ignore
    expect(chunk(4)(array)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24]])
    // prettier-ignore
    expect(chunk(5)(array)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24]])
    // prettier-ignore
    expect(chunk(6)(array)).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24]])
  });
});

describe("count", () => {
  it("should create a count function", () => {
    // prettier-ignore
    const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]
    expect(count(0)(array)).toBe(0);
    expect(count(1)(array)).toBe(1);
    expect(count(2)(array)).toBe(2);
    expect(count(3)(array)).toBe(3);
    expect(count(4)(array)).toBe(4);
    expect(count(5)(array)).toBe(5);
    expect(count(6)(array)).toBe(6);
  });
});

describe("flaten", () => {
  it("should flatten arrays", () => {
    expect(
      flatten([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("smallest", () => {
  it("should return the smallest match", () => {
    // prettier-ignore
    const arrays = [[0, 1, 2, 3, 4], [0, 0, 0, 0, 0], [1, 1, 1, 1, 2], [0, 0, 1, 1, 2]]
    expect(smallest(count(0))(arrays)).toEqual(arrays[2]);
    expect(smallest(count(1))(arrays)).toEqual(arrays[1]);
    expect(smallest(count(2))(arrays)).toEqual(arrays[1]);
  });
});

describe("pivot", () => {
  const a = [];
  const b = [];
  const c = [];
  const d = [];
  const e = [];
  const f = [];
  const g = [];
  const h = [];
  const i = [];
  const result = pivot([
    [a, b, c],
    [d, e, f],
    [g, h, i]
  ]);

  it.each([
    [0, 0, a],
    [0, 1, d],
    [0, 2, g],
    [1, 0, b],
    [1, 1, e],
    [1, 2, h],
    [2, 0, c],
    [2, 1, f],
    [2, 2, i]
  ])("should pivot correctly", (x, y, value) => {
    expect(result[x][y]).toEqual(value);
  });
});

describe("verify", () => {
  it("should return the correct answer", () => {
    expect(verify(input.split(""))).toBe(2562);
  });
});
