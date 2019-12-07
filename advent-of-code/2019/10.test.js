import { compute } from "./10";
import input from "./10-input";

describe("compute", () => {
  it("should work for the position mode examples", () => {
    const isEqualToEight = compute(3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8);
    expect(isEqualToEight(8)).toBe(1);
    expect(isEqualToEight(1)).toBe(0);

    const isLessThanEight = compute(3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8);
    expect(isLessThanEight(1)).toBe(1);
    expect(isLessThanEight(10)).toBe(0);
  });

  it("should work for the immediate mode examples", () => {
    const isEqualToEight = compute(3, 3, 1108, -1, 8, 3, 4, 3, 99);
    expect(isEqualToEight(8)).toBe(1);
    expect(isEqualToEight(1)).toBe(0);

    const isLessThanEight = compute(3, 3, 1107, -1, 8, 3, 4, 3, 99);
    expect(isLessThanEight(1)).toBe(1);
    expect(isLessThanEight(10)).toBe(0);
  });

  it("should work for jump tests", () => {
    const jumpI = compute(3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1);
    expect(jumpI(10)).toBe(1);
    expect(jumpI(1)).toBe(1);
    expect(jumpI(0)).toBe(0);

    const jumpP = compute(
      3,
      12,
      6,
      12,
      15,
      1,
      13,
      14,
      13,
      4,
      13,
      99,
      -1,
      0,
      1,
      9
    );
    expect(jumpP(10)).toBe(1);
    expect(jumpP(1)).toBe(1);
    expect(jumpP(0)).toBe(0);
  });

  it("should work for the larger example", () => {
    const compareToEight = compute(
      3,
      21,
      1008,
      21,
      8,
      20,
      1005,
      20,
      22,
      107,
      8,
      21,
      20,
      1006,
      20,
      31,
      1106,
      0,
      36,
      98,
      0,
      0,
      1002,
      21,
      125,
      20,
      4,
      20,
      1105,
      1,
      46,
      104,
      999,
      1105,
      1,
      46,
      1101,
      1000,
      1,
      20,
      4,
      20,
      1105,
      1,
      46,
      98,
      99
    );
    expect(compareToEight(7)).toBe(999);
    expect(compareToEight(8)).toBe(1000);
    expect(compareToEight(9)).toBe(1001);
  });

  it("should work for the actual input", () => {
    const run = compute(...input);
    expect(run(5)).toBe(11460760);
  });
});
