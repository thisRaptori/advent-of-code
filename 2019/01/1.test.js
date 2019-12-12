import { countFuel } from "./1";
import input from "./input";

describe("countFuel", () => {
  it("should pass examples", () => {
    expect(countFuel(12)).toBe(2);
    expect(countFuel(14)).toBe(2);
    expect(countFuel(1969)).toBe(654);
    expect(countFuel(100756)).toBe(33583);
  });

  it("should add numbers", () => {
    expect(countFuel(12, 14, 1969, 100756)).toBe(2 + 2 + 654 + 33583);
  });

  it("should print the actual result", () => {
    expect(countFuel(...input)).toBe(3388015);
  });
});
