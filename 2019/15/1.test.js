import { explore } from "./1";
import input from "./input";

describe("explore", () => {
  it("should explore", async () => {
    const finalState = await explore(input);

    // should return to home
    expect(finalState.location).toEqual([0, 0]);
    expect(finalState.path).toEqual([]);

    // should have found the oxygen system
    expect(finalState.oxygenSystemLocation).toEqual([-16, -14]);
    expect(finalState.oxygenSystemDistance).toEqual(238);
  }, 10000);
});
