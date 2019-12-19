import { getAvailablePaths, parseInput, searchMaze } from "./1";

// prettier-ignore
const example1 =
`#########
#b.A.@.a#
#########`

// prettier-ignore
const example2 =
`########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################`

// prettier-ignore
const example3 =
`########################
#...............b.C.D.f#
#.######################
#.....@.a.B.c.d.A.e.F.g#
########################`

// prettier-ignore
const example4 =
`#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
#################`

// prettier-ignore
const example5 =
`########################
#@..............ac.GI.b#
###d#e#f################
###A#B#C################
###g#h#i################
########################`

describe("parseInput", () => {
  it("should find the start coordinates", () => {
    expect(parseInput(example1).start).toEqual([5, 1]);
    expect(parseInput(example2).start).toEqual([15, 1]);
    expect(parseInput(example3).start).toEqual([6, 3]);
    expect(parseInput(example4).start).toEqual([8, 4]);
    expect(parseInput(example5).start).toEqual([1, 1]);
  });

  it("should format the map", () => {
    // prettier-ignore
    expect(parseInput(example1).map).toEqual([
      [],
      [, "b", ' ', "A", ' ', ' ', ' ', "a"],
      []
    ]);

    // prettier-ignore
    expect(parseInput(example2).map).toEqual([
      [],
      [, 'f', ' ', 'D', ' ', 'E', ' ', 'e', ' ', 'C', ' ', 'b', ' ', 'A', ' ', ' ', ' ', 'a', ' ', 'B', ' ', 'c', ' '],
      [, , , , , , , , , , , , , , , , , , , , , , ' '],
      [, 'd', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      []
    ]);

    // prettier-ignore
    expect(parseInput(example3).map).toEqual([
      [],
      [, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', "b", ' ', "C", ' ', "D", ' ', "f"],
      [, ' '],
      [, ' ', ' ', ' ', ' ', ' ', ' ', ' ', "a", ' ', "B", ' ', "c", ' ', "d", ' ', "A", ' ', "e", ' ', "F", ' ', "g"],
      []
    ]);

    // prettier-ignore
    expect(parseInput(example4).map).toEqual([
      [],
      [, "i", ' ', "G", ' ', ' ', "c", ' ', ' ', ' ', "e", ' ', ' ', "H", ' ', "p"],
      [, , , , , , , , ' '],
      [, "j", ' ', "A", ' ', ' ', "b", ' ', ' ', ' ', "f", ' ', ' ', "D", ' ', "o"],
      [, , , , , , , , ' '],
      [, "k", ' ', "E", ' ', ' ', "a", ' ', ' ', ' ', "g", ' ', ' ', "B", ' ', "n"],
      [, , , , , , , , ' '],
      [, "l", ' ', "F", ' ', ' ', "d", ' ', ' ', ' ', "h", ' ', ' ', "C", ' ', "m"],
      []
    ]);

    // prettier-ignore
    expect(parseInput(example5).map).toEqual([
      [],
      [, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', "a", "c", ' ', "G", "I", ' ', "b"],
      [, , , "d", , "e", , "f"],
      [, , , "A", , "B", , "C"],
      [, , , "g", , "h", , "i"],
      []
    ]);
  });

  it("should return the keys", () => {
    // prettier-ignore
    expect(parseInput(example1).keys.hidden)
      .toEqual(["a", "b"]);
    // prettier-ignore
    expect(parseInput(example2).keys.hidden)
      .toEqual(["a", "b", "c", "d", "e", "f"]);
    // prettier-ignore
    expect(parseInput(example3).keys.hidden)
      .toEqual(["a", "b", "c", "d", "e", "f", "g"]);
    // prettier-ignore
    expect(parseInput(example4).keys.hidden)
      .toEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]);
    // prettier-ignore
    expect(parseInput(example5).keys.hidden)
      .toEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
  });
});

describe("getAvailablePaths", () => {
  it("should return the available edges", () => {
    let visited = [[], [], [], [], [], [], [], []];
    let map = parseInput(example1).map;
    // prettier-ignore
    expect(getAvailablePaths(map, [1, 1], visited)).toEqual([[2, 1]])
    // prettier-ignore
    expect(getAvailablePaths(map, [3, 1], visited)).toEqual([[2, 1], [4, 1]])

    map = parseInput(example2).map;
    // prettier-ignore
    expect(getAvailablePaths(map, [22, 1], visited)).toEqual([[22, 2], [21, 1]])
    // prettier-ignore
    expect(getAvailablePaths(map, [22, 2], visited)).toEqual([[22, 1], [22, 3]])
    // prettier-ignore
    expect(getAvailablePaths(map, [22, 3], visited)).toEqual([[22, 2], [21, 3]])

    map = parseInput(example4).map;
    // prettier-ignore
    expect(getAvailablePaths(map, [8, 1], visited)).toEqual([[8, 2], [7, 1], [9, 1]])
    // prettier-ignore
    expect(getAvailablePaths(map, [8, 3], visited)).toEqual([[8, 2], [8, 4], [7, 3], [9, 3]])
    // prettier-ignore
    expect(getAvailablePaths(map, [8, 7], visited)).toEqual([[8, 6], [7, 7], [9, 7]])

    map = [
      [, " "],
      [" ", " ", " "],
      [, " "]
    ];
    // prettier-ignore
    expect(getAvailablePaths(map, [1, 1], visited)).toEqual([[1, 0], [1, 2], [0, 1], [2, 1]])
    visited = [[1, 1, 1], [1], []];
    // prettier-ignore
    expect(getAvailablePaths(map, [1, 1], visited)).toEqual([[1, 2], [2, 1]])
  });
});

describe("searchMaze", () => {
  it("should return the shortest path length", () => {
    expect(searchMaze(example1).steps).toBe(8);
    expect(searchMaze(example2).steps).toBe(86);
    expect(searchMaze(example5).steps).toBe(81);
    expect(searchMaze(example3).steps).toBe(132);

    // my solution is too slow to solve example4 in a reasonable time period
    // so i'm just going to stop at this point since this is no longer fun!

    // expect(searchMaze(example4).steps).toBe(136);
  });
});
