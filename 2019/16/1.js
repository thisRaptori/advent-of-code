const pipe = (...fns) => input => fns.reduce((acc, cur) => cur(acc), input);
const array = (length, fn) => Array.from({ length }, (_, i) => fn(i));
const getLastDigit = number => Math.abs(number % 10);
const reifyIndex = (pattern, element) => index =>
  pattern[Math.floor(((index + 1) / (element + 1)) % pattern.length)];
const reifyPattern = (pattern, length) => element =>
  array(length, reifyIndex(pattern, element));
const multiplyWithSignal = signal => multipliers =>
  multipliers.reduce((acc, cur, i) => acc + cur * signal[i], 0);

export function cleanSignal(input, phaseCount = 1, pattern = [0, 1, 0, -1]) {
  let signal = input.split("");

  for (let phase = 0; phase < phaseCount; phase++) {
    signal = array(
      signal.length,
      pipe(
        reifyPattern(pattern, signal.length),
        multiplyWithSignal(signal),
        getLastDigit
      )
    );
  }

  return signal.join("");
}
