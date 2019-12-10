import { destroyAsteroids, findIdealMonitoringLocation } from "./2";
import input from "./input";

const get = (array, target) => array[target - 1];

// prettier-ignore
const example1 =
`.#.
###
.#.`

// prettier-ignore
const example2 =
`.#....#####...#..
##...##.#####..##
##...#...#.#####.
..#.....X...###..
..#.#.....#....##`

// prettier-ignore
const example3 =
`.#..##.###...#######
##.############..##.
.#.######.########.#
.###.#######.####.#.
#####.##.#.##.###.##
..#####..#.#########
####################
#.####....###.#.#.##
##.#################
#####.##.###..####..
..######..##.#######
####.##.####...##..#
.#####..#.######.###
##...#.##########...
#.##########.#######
.####.#.###.###.#.##
....##.##.###..#####
.#.#.###########.###
#.#.#.#####.####.###
###.##.####.##.#..##`

describe("destroyAsteroids", () => {
  it("should pass the examples", () => {
    let result = destroyAsteroids(example1, [1, 1]);
    expect(result[0]).toEqual([1, 0]);
    expect(result[1]).toEqual([2, 1]);
    expect(result[2]).toEqual([1, 2]);
    expect(result[3]).toEqual([0, 1]);

    result = destroyAsteroids(example1, [1, 0]);
    expect(result[0]).toEqual([2, 1]);
    expect(result[1]).toEqual([1, 1]);
    expect(result[2]).toEqual([0, 1]);
    expect(result[3]).toEqual([1, 2]);

    result = destroyAsteroids(example2, [8, 3]);
    expect(result[0]).toEqual([8, 1]);
    expect(result[result.length - 1]).toEqual([14, 3]);

    result = destroyAsteroids(example3, [11, 13]);
    expect(get(result, 1)).toEqual([11, 12]);
    expect(get(result, 2)).toEqual([12, 1]);
    expect(get(result, 3)).toEqual([12, 2]);
    expect(get(result, 10)).toEqual([12, 8]);
    expect(get(result, 20)).toEqual([16, 0]);
    expect(get(result, 50)).toEqual([16, 9]);
    expect(get(result, 100)).toEqual([10, 16]);
    expect(get(result, 199)).toEqual([9, 6]);
    expect(get(result, 200)).toEqual([8, 2]);
    expect(get(result, 201)).toEqual([10, 9]);
    expect(get(result, 299)).toEqual([11, 1]);
  });

  it("should work for the weird actual question", () => {
    const result = destroyAsteroids(input, [26, 29]);
    expect(get(result, 200)).toEqual([4, 8]);
  });
});
