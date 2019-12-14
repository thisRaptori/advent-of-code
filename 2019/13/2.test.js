import { findMaxScore } from "./2";
import input from "./input";

describe("findMaxScore", () => {
  it("should find the final score", async () => {
    input[0] = 2;
    expect(await findMaxScore(input)).toBe(20940);
  });
});
