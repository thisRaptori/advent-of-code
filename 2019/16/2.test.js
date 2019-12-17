import { cleanSignal } from "./2";
import input from "./input";

describe("cleanSignal", () => {
  it("should work with example input", () => {
    expect(cleanSignal("03036732577212944063491565474664", 100)).toEqual(
      "84462026"
    );
    expect(cleanSignal("02935109699940807407585447034323", 100)).toEqual(
      "78725270"
    );
    expect(cleanSignal("03081770884921959731165446850517", 100)).toEqual(
      "53553731"
    );
  });

  it("should work with the real input", () => {
    expect(cleanSignal(input, 100)).toEqual("");
  });
});
