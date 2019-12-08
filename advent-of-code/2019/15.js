export const chunk = count => array => {
  const chunks = [];
  for (let i = 0; i < array.length / count; i++) {
    const start = count * i;
    chunks.push(array.slice(start, start + count));
  }
  return chunks;
};

export const count = value => line => line.filter(v => v === value).length;
const countZeroes = count("0");
const countOnes = count("1");
const countTwos = count("2");

export const pivot = arrays => {
  const result = Array.from({ length: arrays.length }, () => []);
  arrays.forEach(array => {
    array.forEach((chunk, i) => {
      result[i].push(chunk);
    });
  });
  return result;
};

export const smallest = fn => array =>
  array.reduce((acc, cur) => (fn(acc) < fn(cur) ? acc : cur));

export const flatten = array => array.reduce((acc, cur) => acc.concat(cur));

export const verify = data => {
  const chunks = chunk(25)(data);
  const layers = chunk(6)(chunks).map(flatten);
  const selectedLine = smallest(countZeroes)(layers);
  return countOnes(selectedLine) * countTwos(selectedLine);
};
