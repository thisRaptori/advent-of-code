import input from "./input";

const pixels = input.split("");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

const colours = {
  0: "#000000",
  1: "#ffffff"
};

const processPixel = (top, bottom) => (top === "2" ? bottom : top);

const chunk = count => array => {
  const chunks = [];
  for (let i = 0; i < array.length / count; i++) {
    const start = count * i;
    chunks.push(array.slice(start, start + count));
  }
  return chunks;
};

const chunks = chunk(25)(pixels);
const layers = chunk(6)(chunks);

for (let y = 0; y < 6; y++) {
  for (let x = 0; x < 25; x++) {
    const pixel = layers.map(layer => layer[y][x]);
    ctx.fillStyle = colours[pixel.reduce(processPixel)];
    ctx.fillRect(x * 4, y * 4, 4, 4);
  }
}
