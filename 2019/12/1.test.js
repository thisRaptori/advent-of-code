import { trackMoons } from "./1";

describe("trackmoons", () => {
  it("should pass the first example", () => {
    const moons = trackMoons([
      [-1, 0, 2],
      [2, -10, -7],
      [4, -8, 8],
      [3, 5, -1]
    ]);

    expect(moons.getState()).toEqual([
      { position: [-1, 0, 2], velocity: [0, 0, 0] },
      { position: [2, -10, -7], velocity: [0, 0, 0] },
      { position: [4, -8, 8], velocity: [0, 0, 0] },
      { position: [3, 5, -1], velocity: [0, 0, 0] }
    ]);

    // step 1
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [2, -1, 1], velocity: [3, -1, -1] },
      { position: [3, -7, -4], velocity: [1, 3, 3] },
      { position: [1, -7, 5], velocity: [-3, 1, -3] },
      { position: [2, 2, 0], velocity: [-1, -3, 1] }
    ]);

    // step 2
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [5, -3, -1], velocity: [3, -2, -2] },
      { position: [1, -2, 2], velocity: [-2, 5, 6] },
      { position: [1, -4, -1], velocity: [0, 3, -6] },
      { position: [1, -4, 2], velocity: [-1, -6, 2] }
    ]);

    // step 3
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [5, -6, -1], velocity: [0, -3, 0] },
      { position: [0, 0, 6], velocity: [-1, 2, 4] },
      { position: [2, 1, -5], velocity: [1, 5, -4] },
      { position: [1, -8, 2], velocity: [0, -4, 0] }
    ]);

    // step 4
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [2, -8, 0], velocity: [-3, -2, 1] },
      { position: [2, 1, 7], velocity: [2, 1, 1] },
      { position: [2, 3, -6], velocity: [0, 2, -1] },
      { position: [2, -9, 1], velocity: [1, -1, -1] }
    ]);

    // step 5
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [-1, -9, 2], velocity: [-3, -1, 2] },
      { position: [4, 1, 5], velocity: [2, 0, -2] },
      { position: [2, 2, -4], velocity: [0, -1, 2] },
      { position: [3, -7, -1], velocity: [1, 2, -2] }
    ]);

    // step 6
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [-1, -7, 3], velocity: [0, 2, 1] },
      { position: [3, 0, 0], velocity: [-1, -1, -5] },
      { position: [3, -2, 1], velocity: [1, -4, 5] },
      { position: [3, -4, -2], velocity: [0, 3, -1] }
    ]);

    // step 7
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [2, -2, 1], velocity: [3, 5, -2] },
      { position: [1, -4, -4], velocity: [-2, -4, -4] },
      { position: [3, -7, 5], velocity: [0, -5, 4] },
      { position: [2, 0, 0], velocity: [-1, 4, 2] }
    ]);

    // step 8
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [5, 2, -2], velocity: [3, 4, -3] },
      { position: [2, -7, -5], velocity: [1, -3, -1] },
      { position: [0, -9, 6], velocity: [-3, -2, 1] },
      { position: [1, 1, 3], velocity: [-1, 1, 3] }
    ]);

    // step 9
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [5, 3, -4], velocity: [0, 1, -2] },
      { position: [2, -9, -3], velocity: [0, -2, 2] },
      { position: [0, -8, 4], velocity: [0, 1, -2] },
      { position: [1, 1, 5], velocity: [0, 0, 2] }
    ]);

    // step 10
    moons.step();
    expect(moons.getState()).toEqual([
      { position: [2, 1, -3], velocity: [-3, -2, 1] },
      { position: [1, -8, 0], velocity: [-1, 1, 3] },
      { position: [3, -6, 1], velocity: [3, 2, -3] },
      { position: [2, 0, 4], velocity: [1, -1, -1] }
    ]);

    expect(moons.getTotalEnergy()).toBe(179);
  });

  it("should pass the second example", () => {
    const moons = trackMoons([
      [-8, -10, 0],
      [5, 5, 10],
      [2, -7, 3],
      [9, -8, -3]
    ]);

    expect(moons.getState()).toEqual([
      { position: [-8, -10, 0], velocity: [0, 0, 0] },
      { position: [5, 5, 10], velocity: [0, 0, 0] },
      { position: [2, -7, 3], velocity: [0, 0, 0] },
      { position: [9, -8, -3], velocity: [0, 0, 0] }
    ]);

    // step 10
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [-9, -10, 1], velocity: [-2, -2, -1] },
      { position: [4, 10, 9], velocity: [-3, 7, -2] },
      { position: [8, -10, -3], velocity: [5, -1, -2] },
      { position: [5, -10, 3], velocity: [0, -4, 5] }
    ]);

    // step 20
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [-10, 3, -4], velocity: [-5, 2, 0] },
      { position: [5, -25, 6], velocity: [1, 1, -4] },
      { position: [13, 1, 1], velocity: [5, -2, 2] },
      { position: [0, 1, 7], velocity: [-1, -1, 2] }
    ]);

    // step 30
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [15, -6, -9], velocity: [-5, 4, 0] },
      { position: [-4, -11, 3], velocity: [-3, -10, 0] },
      { position: [0, -1, 11], velocity: [7, 4, 3] },
      { position: [-3, -2, 5], velocity: [1, 2, -3] }
    ]);

    // step 40
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [14, -12, -4], velocity: [11, 3, 0] },
      { position: [-1, 18, 8], velocity: [-5, 2, 3] },
      { position: [-5, -14, 8], velocity: [1, -2, 0] },
      { position: [0, -12, -2], velocity: [-7, -3, -3] }
    ]);

    // step 50
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [-23, 4, 1], velocity: [-7, -1, 2] },
      { position: [20, -31, 13], velocity: [5, 3, 4] },
      { position: [-4, 6, 1], velocity: [-1, 1, -3] },
      { position: [15, 1, -5], velocity: [3, -3, -3] }
    ]);

    // step 60
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [36, -10, 6], velocity: [5, 0, 3] },
      { position: [-18, 10, 9], velocity: [-3, -7, 5] },
      { position: [8, -12, -3], velocity: [-2, 1, -7] },
      { position: [-18, -8, -2], velocity: [0, 6, -1] }
    ]);

    // step 70
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [-33, -6, 5], velocity: [-5, -4, 7] },
      { position: [13, -9, 2], velocity: [-2, 11, 3] },
      { position: [11, -8, 2], velocity: [8, -6, -7] },
      { position: [17, 3, 1], velocity: [-1, -1, -3] }
    ]);

    // step 80
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [30, -8, 3], velocity: [3, 3, 0] },
      { position: [-2, -4, 0], velocity: [4, -13, 2] },
      { position: [-18, -7, 15], velocity: [-8, 2, -2] },
      { position: [-2, -1, -8], velocity: [1, 8, 0] }
    ]);

    // step 90
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [-25, -1, 4], velocity: [1, -3, 4] },
      { position: [2, -9, 0], velocity: [-3, 13, -1] },
      { position: [32, -8, 14], velocity: [5, -4, 6] },
      { position: [-1, -2, -8], velocity: [-3, -6, -9] }
    ]);

    // step 100
    moons.step(10);
    expect(moons.getState()).toEqual([
      { position: [8, -12, -9], velocity: [-7, 3, 0] },
      { position: [13, 16, -3], velocity: [3, -11, -5] },
      { position: [-29, -11, -1], velocity: [-3, 7, 4] },
      { position: [16, -13, 23], velocity: [7, 1, 1] }
    ]);

    expect(moons.getTotalEnergy()).toBe(1940);
  });

  it("should pass with the actual input", () => {
    const moons = trackMoons([
      [6, 10, 10],
      [-9, 3, 17],
      [9, -4, 14],
      [4, 14, 4]
    ]);

    moons.step(1000);

    expect(moons.getTotalEnergy()).toBe(13045);
  });
});
