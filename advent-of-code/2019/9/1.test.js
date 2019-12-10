import { compute } from "./1";
import input from "./input";

const getOutput = interpreter =>
  new Promise(resolve => {
    interpreter.onComplete(resolve);
    interpreter.start();
  });

describe("compute", () => {
  it("should run examples", async () => {
    let interpreter;

    // prettier-ignore
    const returnSelf = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99];
    interpreter = compute(...returnSelf);
    expect(
      await new Promise(resolve => {
        const output = [];
        interpreter.subscribe(output.push.bind(output));
        interpreter.onComplete(() => resolve(output));
        interpreter.start();
      })
    ).toEqual(returnSelf);

    interpreter = compute(1102, 34915192, 34915192, 7, 4, 7, 99, 0);
    expect(await getOutput(interpreter)).toBe(1219070632396864);

    interpreter = compute(104, 1125899906842624, 99);
    expect(await getOutput(interpreter)).toBe(1125899906842624);
  });

  it("should pass the actual input", async () => {
    const interpreter = compute(...input);
    interpreter.push(1);
    expect(await getOutput(interpreter)).toBe(3013554615);
  });
});
