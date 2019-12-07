function calculateRequiredFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

export function countFuel(...modules) {
  return modules.reduce((acc, cur) => acc + calculateRequiredFuel(cur), 0);
}
