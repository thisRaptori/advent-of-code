import { countOrbits } from "./11";
import input from "./11-input";

describe("countOrbits", () => {
  it("should count the orbits", () => {
    expect(countOrbits("A)B", "C)D", "B)C")).toBe(6);
    expect(
      countOrbits(
        "COM)B",
        "B)C",
        "C)D",
        "D)E",
        "E)F",
        "B)G",
        "G)H",
        "D)I",
        "E)J",
        "J)K",
        "K)L"
      )
    ).toBe(42);
  });

  it("should do stuff", () => {
    expect(countOrbits(...input)).toBe(271151);
  });
});
