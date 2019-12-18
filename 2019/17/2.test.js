import { explore, routine } from "./2";
import input from "./input";

const A = "A".charCodeAt();
const B = "B".charCodeAt();
const C = "C".charCodeAt();
const L = "L".charCodeAt();
const R = "R".charCodeAt();

const S = "6".charCodeAt();
const E = "8".charCodeAt();
const N = "9".charCodeAt();

const c = ",".charCodeAt();
const n = "\n".charCodeAt();

describe("routine", () => {
  it("should convert movement list into charCodes with separators", () => {
    // prettier-ignore
    expect(routine("A", "A", "B", "C", "B", "C", "B", "C"))
        .toEqual([A, c, A, c, B, c, C, c, B, c, C, c, B, c, C, n]);

    // prettier-ignore
    expect(routine(9, 'L', 8, "R", 6))
        .toEqual([N, c, L, c, E, c, R, c, S, n]);
  });
});

describe("explore", () => {
  it("should output the dust the robot collects", async () => {
    expect(await explore(input)).toBe(962913);
  });
});
