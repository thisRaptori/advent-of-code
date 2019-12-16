import { fill } from "./2";
import input from "./input";

describe("fill", () => {
  it("should return the fill time", async () => {
    const result = await fill(input);

    expect(result).toEqual(392);
  });
});
