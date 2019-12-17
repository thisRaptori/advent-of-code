export function cleanSignal(input, phaseCount) {
  const offset = parseInt(input.slice(0, 7), 10);

  let signal = input
    .repeat(10000)
    .slice(offset)
    .split("")
    .map(Number);

  for (let phase = 0; phase < phaseCount; phase++) {
    for (let index = signal.length - 2; index >= 0; index--) {
      signal[index] = Math.abs(signal[index] + signal[index + 1]) % 10;
    }
  }

  return signal.slice(0, 8).join("");
}
