import { compute } from "./3";
import input from "./3-input";

const expectedResult = 19690720;

const loop = fn => Array.from({ length: 100 }, (_, i) => fn(i));
const tests = loop(noun => loop(verb => [noun, verb])).flat();

console.log("starting");
tests.forEach(([noun, verb]) => {
  const clone = [...input];

  clone[1] = noun;
  clone[2] = verb;
  const result = compute(...clone);

  if (result[0] === expectedResult) {
    console.log(noun, verb);
  }
});
console.log("finishing");
