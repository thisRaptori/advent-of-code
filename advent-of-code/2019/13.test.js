import { findHighestOutput, runAmplifiers } from "./13";
import input from "./13-input";

describe("compute", () => {
  it("should run the examples", () => {
    let run = runAmplifiers(
      3,
      15,
      3,
      16,
      1002,
      16,
      10,
      16,
      1,
      16,
      15,
      15,
      4,
      15,
      99,
      0,
      0
    );
    expect(run(4, 3, 2, 1, 0)).toBe(43210);

    run = runAmplifiers(
      3,
      23,
      3,
      24,
      1002,
      24,
      10,
      24,
      1002,
      23,
      -1,
      23,
      101,
      5,
      23,
      23,
      1,
      24,
      23,
      23,
      4,
      23,
      99,
      0,
      0
    );
    expect(run(0, 1, 2, 3, 4)).toBe(54321);

    run = runAmplifiers(
      3,
      31,
      3,
      32,
      1002,
      32,
      10,
      32,
      1001,
      31,
      -2,
      31,
      1007,
      31,
      0,
      33,
      1002,
      33,
      7,
      33,
      1,
      33,
      31,
      31,
      1,
      32,
      31,
      31,
      4,
      31,
      99,
      0,
      0,
      0
    );
    expect(run(1, 0, 4, 3, 2)).toBe(65210);
  });

  it("should process the input", () => {
    const run = runAmplifiers(...input);

    expect(run(0, 1, 2, 3, 4)).toBe(4924);
  });
});

describe("findHighestOutput", () => {
  it("should return the highest output", () => {
    expect(findHighestOutput(...input)).toBe();
  });
});
