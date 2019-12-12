import { findIdealMonitoringLocation } from "./1";
import input from "./input";

// prettier-ignore
const example1 =
`.#..#
.....
#####
....#
...##`

// prettier-ignore
const example2 =
`......#.#.
#..#.#....
..#######.
.#.#.###..
.#..#.....
..#....#.#
#..#....#.
.##.#..###
##...#..#.
.#....####`

// prettier-ignore
const example3 =
`#.#...#.#.
.###....#.
.#....#...
##.#.#.#.#
....#.#.#.
.##..###.#
..#...##..
..##....##
......#...
.####.###.`

// prettier-ignore
const example4 =
`.#..#..###
####.###.#
....###.#.
..###.##.#
##.##.#.#.
....###..#
..#.#..#.#
#..#.#.###
.##...##.#
.....#.#..`

// prettier-ignore
const example5 =
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

describe("findIdealMonitoringLocation", () => {
  it("should pass the examples", () => {
    expect(findIdealMonitoringLocation(example1)).toEqual({
      count: 8,
      x: 3,
      y: 4
    });
    expect(findIdealMonitoringLocation(example2)).toEqual({
      count: 33,
      x: 5,
      y: 8
    });
    expect(findIdealMonitoringLocation(example3)).toEqual({
      count: 35,
      x: 1,
      y: 2
    });
    expect(findIdealMonitoringLocation(example4)).toEqual({
      count: 41,
      x: 6,
      y: 3
    });
    expect(findIdealMonitoringLocation(example5)).toEqual({
      count: 210,
      x: 11,
      y: 13
    });
  });

  it("should find the actual result", () => {
    expect(findIdealMonitoringLocation(input)).toEqual({
      count: 303,
      x: 26,
      y: 29
    });
  });
});
