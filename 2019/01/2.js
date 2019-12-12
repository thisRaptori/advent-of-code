function calculateRequiredFuel(mass) {
  const total = Math.floor(mass / 3) - 2;
  const extra = total > 0 ? calculateRequiredFuel(total) : 0;
  return extra > 0 ? total + extra : total;
}

export function countFuel(...modules) {
  return modules.reduce((acc, cur) => acc + calculateRequiredFuel(cur), 0);
}
