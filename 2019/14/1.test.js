import { buildRequirements, getRequirements, parse } from "./1";
import input from "./input";

// prettier-ignore
const example1 =
`10 ORE => 10 A
1 ORE => 1 B
7 A, 1 B => 1 C
7 A, 1 C => 1 D
7 A, 1 D => 1 E
7 A, 1 E => 1 FUEL`

// prettier-ignore
const example2 =
`9 ORE => 2 A
8 ORE => 3 B
7 ORE => 5 C
3 A, 4 B => 1 AB
5 B, 7 C => 1 BC
4 C, 1 A => 1 CA
2 AB, 3 BC, 4 CA => 1 FUEL`

// prettier-ignore
const example3 =
`157 ORE => 5 NZVS
165 ORE => 6 DCFZ
44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ => 1 FUEL
12 HKGWZ, 1 GPVTF, 8 PSHF => 9 QDVJ
179 ORE => 7 PSHF
177 ORE => 5 HKGWZ
7 DCFZ, 7 PSHF => 2 XJWVT
165 ORE => 2 GPVTF
3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF => 8 KHKGT`

// prettier-ignore
const example4 =
`2 VPVL, 7 FWMGM, 2 CXFTF, 11 MNCFX => 1 STKFG
17 NVRVD, 3 JNWZP => 8 VPVL
53 STKFG, 6 MNCFX, 46 VJHF, 81 HVMC, 68 CXFTF, 25 GNMV => 1 FUEL
22 VJHF, 37 MNCFX => 5 FWMGM
139 ORE => 4 NVRVD
144 ORE => 7 JNWZP
5 MNCFX, 7 RFSQX, 2 FWMGM, 2 VPVL, 19 CXFTF => 3 HVMC
5 VJHF, 7 MNCFX, 9 VPVL, 37 CXFTF => 6 GNMV
145 ORE => 6 MNCFX
1 NVRVD => 8 CXFTF
1 VJHF, 6 MNCFX => 4 RFSQX
176 ORE => 6 VJHF`

// prettier-ignore
const example5 =
`171 ORE => 8 CNZTR
7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP => 4 PLWSL
114 ORE => 4 BHXH
14 VRPVC => 6 BMBT
6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW => 1 FUEL
6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP => 6 FHTLT
15 XDBXC, 2 LTCX, 1 VRPVC => 6 ZLQW
13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW => 1 ZDVW
5 BMBT => 4 WPTQ
189 ORE => 9 KTJDG
1 MZWV, 17 XDBXC, 3 XCVML => 2 XMNCP
12 VRPVC, 27 CNZTR => 2 XDBXC
15 KTJDG, 12 BHXH => 5 XCVML
3 BHXH, 2 VRPVC => 7 MZWV
121 ORE => 7 VRPVC
7 XCVML => 6 RJRHP
5 BHXH, 4 VRPVC => 5 LTCX`

describe("parse", () => {
  it("should parse the input string into usable data", () => {
    // prettier-ignore
    expect(parse(example1)).toEqual([
      { input: { ORE: 10 }, output: "A", quantity: 10 },
      { input: { ORE: 1 }, output: "B", quantity: 1 },
      { input: { A: 7, B: 1 }, output: "C", quantity: 1 },
      { input: { A: 7, C: 1 }, output: "D", quantity: 1 },
      { input: { A: 7, D: 1 }, output: "E", quantity: 1 },
      { input: { A: 7, E: 1 }, output: "FUEL", quantity: 1 }
    ]);
    // prettier-ignore
    expect(parse(example2)).toEqual([
      { input: { ORE: 9 }, output: "A", quantity: 2 },
      { input: { ORE: 8 }, output: "B", quantity: 3 },
      { input: { ORE: 7 }, output: "C", quantity: 5 },
      { input: { A: 3, B: 4 }, output: "AB", quantity: 1 },
      { input: { B: 5, C: 7 }, output: "BC", quantity: 1 },
      { input: { A: 1, C: 4 }, output: "CA", quantity: 1 },
      { input: { AB: 2, BC: 3, CA: 4 }, output: "FUEL", quantity: 1 }
    ]);
    // prettier-ignore
    expect(parse(example3)).toEqual([
      { input: { ORE: 157 }, output: "NZVS", quantity: 5 },
      { input: { ORE: 165 }, output: "DCFZ", quantity: 6 },
      { input: { GPVTF: 9, HKGWZ: 48, KHKGT: 5, NZVS: 29, QDVJ: 1, XJWVT: 44 }, output: "FUEL", quantity: 1 },
      { input: { GPVTF: 1, HKGWZ: 12, PSHF: 8 }, output: "QDVJ", quantity: 9 },
      { input: { ORE: 179 }, output: "PSHF", quantity: 7 },
      { input: { ORE: 177 }, output: "HKGWZ", quantity: 5 },
      { input: { DCFZ: 7, PSHF: 7 }, output: "XJWVT", quantity: 2 },
      { input: { ORE: 165 }, output: "GPVTF", quantity: 2 },
      { input: { DCFZ: 3, HKGWZ: 5, NZVS: 7, PSHF: 10 }, output: "KHKGT", quantity: 8 }
    ]);
    // prettier-ignore
    expect(parse(example4)).toEqual([
      { input: { CXFTF: 2, FWMGM: 7, MNCFX: 11, VPVL: 2 }, output: "STKFG", quantity: 1 },
      { input: { JNWZP: 3, NVRVD: 17 }, output: "VPVL", quantity: 8 },
      { input: { CXFTF: 68, GNMV: 25, HVMC: 81, MNCFX: 6, STKFG: 53, VJHF: 46 }, output: "FUEL", quantity: 1 },
      { input: { MNCFX: 37, VJHF: 22 }, output: "FWMGM", quantity: 5 },
      { input: { ORE: 139 }, output: "NVRVD", quantity: 4 },
      { input: { ORE: 144 }, output: "JNWZP", quantity: 7 },
      { input: { CXFTF: 19, FWMGM: 2, MNCFX: 5, RFSQX: 7, VPVL: 2 }, output: "HVMC", quantity: 3 },
      { input: { CXFTF: 37, MNCFX: 7, VJHF: 5, VPVL: 9 }, output: "GNMV", quantity: 6 },
      { input: { ORE: 145 }, output: "MNCFX", quantity: 6 },
      { input: { NVRVD: 1 }, output: "CXFTF", quantity: 8 },
      { input: { MNCFX: 6, VJHF: 1 }, output: "RFSQX", quantity: 4 },
      { input: { ORE: 176 }, output: "VJHF", quantity: 6 }
    ]);
    // prettier-ignore
    expect(parse(example5)).toEqual([
      { input: { ORE: 171 }, output: "CNZTR", quantity: 8 },
      { input: { BMBT: 3, MZWV: 2, RJRHP: 1, WPTQ: 1, XCVML: 9, XMNCP: 26, ZLQW: 7 }, output: "PLWSL", quantity: 4 },
      { input: { ORE: 114 }, output: "BHXH", quantity: 4 },
      { input: { VRPVC: 14 }, output: "BMBT", quantity: 6 },
      { input: { BHXH: 6, FHTLT: 31, KTJDG: 18, PLWSL: 7, WPTQ: 12, ZDVW: 37 }, output: "FUEL", quantity: 1 },
      { input: { BMBT: 2, KTJDG: 18, MZWV: 6, RJRHP: 1, WPTQ: 6, XMNCP: 1, ZLQW: 8 }, output: "FHTLT", quantity: 6 },
      { input: { LTCX: 2, VRPVC: 1, XDBXC: 15 }, output: "ZLQW", quantity: 6 },
      { input: { LTCX: 10, MZWV: 2, RJRHP: 3, WPTQ: 13, XMNCP: 14, ZLQW: 1 }, output: "ZDVW", quantity: 1 },
      { input: { BMBT: 5 }, output: "WPTQ", quantity: 4 },
      { input: { ORE: 189 }, output: "KTJDG", quantity: 9 },
      { input: { MZWV: 1, XCVML: 3, XDBXC: 17 }, output: "XMNCP", quantity: 2 },
      { input: { CNZTR: 27, VRPVC: 12 }, output: "XDBXC", quantity: 2 },
      { input: { BHXH: 12, KTJDG: 15 }, output: "XCVML", quantity: 5 },
      { input: { BHXH: 3, VRPVC: 2 }, output: "MZWV", quantity: 7 },
      { input: { ORE: 121 }, output: "VRPVC", quantity: 7 },
      { input: { XCVML: 7 }, output: "RJRHP", quantity: 6 },
      { input: { BHXH: 5, VRPVC: 4 }, output: "LTCX", quantity: 5 }
    ]);
  });
});

describe("buildRequirements", () => {
  it("should restructure the input data into requirements", () => {
    // prettier-ignore
    expect(buildRequirements(example1)).toEqual({
      A: [{ ORE: 10 }, 10],
      B: [{ ORE: 1 }, 1],
      C: [{ A: 7, B: 1 }, 1],
      D: [{ A: 7, C: 1 }, 1],
      E: [{ A: 7, D: 1 }, 1],
      FUEL: [{ A: 7, E: 1 }, 1]
    });
    // prettier-ignore
    expect(buildRequirements(example2)).toEqual({
      A: [{ ORE: 9 }, 2],
      AB: [{ A: 3, B: 4 }, 1],
      B: [{ ORE: 8 }, 3],
      BC: [{ B: 5, C: 7 }, 1],
      C: [{ ORE: 7 }, 5],
      CA: [{ A: 1, C: 4 }, 1],
      FUEL: [{ AB: 2, BC: 3, CA: 4 }, 1]
    });
    // prettier-ignore
    expect(buildRequirements(example3)).toEqual({
      DCFZ: [{ ORE: 165 }, 6],
      FUEL: [{ GPVTF: 9, HKGWZ: 48, KHKGT: 5, NZVS: 29, QDVJ: 1, XJWVT: 44 }, 1],
      GPVTF: [{ ORE: 165 }, 2],
      HKGWZ: [{ ORE: 177 }, 5],
      KHKGT: [{ DCFZ: 3, HKGWZ: 5, NZVS: 7, PSHF: 10 }, 8],
      NZVS: [{ ORE: 157 }, 5],
      PSHF: [{ ORE: 179 }, 7],
      QDVJ: [{ GPVTF: 1, HKGWZ: 12, PSHF: 8 }, 9],
      XJWVT: [{ DCFZ: 7, PSHF: 7 }, 2]
    });
    // prettier-ignore
    expect(buildRequirements(example4)).toEqual({
      CXFTF: [{ NVRVD: 1 }, 8],
      FUEL: [{ CXFTF: 68, GNMV: 25, HVMC: 81, MNCFX: 6, STKFG: 53, VJHF: 46 }, 1],
      FWMGM: [{ MNCFX: 37, VJHF: 22 }, 5],
      GNMV: [{ CXFTF: 37, MNCFX: 7, VJHF: 5, VPVL: 9 }, 6],
      HVMC: [{ CXFTF: 19, FWMGM: 2, MNCFX: 5, RFSQX: 7, VPVL: 2 }, 3],
      JNWZP: [{ ORE: 144 }, 7],
      MNCFX: [{ ORE: 145 }, 6],
      NVRVD: [{ ORE: 139 }, 4],
      RFSQX: [{ MNCFX: 6, VJHF: 1 }, 4],
      STKFG: [{ CXFTF: 2, FWMGM: 7, MNCFX: 11, VPVL: 2 }, 1],
      VJHF: [{ ORE: 176 }, 6],
      VPVL: [{ JNWZP: 3, NVRVD: 17 }, 8]
    });
    // prettier-ignore
    expect(buildRequirements(example5)).toEqual({
      BHXH: [{ ORE: 114 }, 4],
      BMBT: [{ VRPVC: 14 }, 6],
      CNZTR: [{ ORE: 171 }, 8],
      FHTLT: [{ BMBT: 2, KTJDG: 18, MZWV: 6, RJRHP: 1, WPTQ: 6, XMNCP: 1, ZLQW: 8 }, 6],
      FUEL: [{ BHXH: 6, FHTLT: 31, KTJDG: 18, PLWSL: 7, WPTQ: 12, ZDVW: 37 }, 1],
      KTJDG: [{ ORE: 189 }, 9],
      LTCX: [{ BHXH: 5, VRPVC: 4 }, 5],
      MZWV: [{ BHXH: 3, VRPVC: 2 }, 7],
      PLWSL: [{ BMBT: 3, MZWV: 2, RJRHP: 1, WPTQ: 1, XCVML: 9, XMNCP: 26, ZLQW: 7 }, 4],
      RJRHP: [{ XCVML: 7 }, 6],
      VRPVC: [{ ORE: 121 }, 7],
      WPTQ: [{ BMBT: 5 }, 4],
      XCVML: [{ BHXH: 12, KTJDG: 15 }, 5],
      XDBXC: [{ CNZTR: 27, VRPVC: 12 }, 2],
      XMNCP: [{ MZWV: 1, XCVML: 3, XDBXC: 17 }, 2],
      ZDVW: [{ LTCX: 10, MZWV: 2, RJRHP: 3, WPTQ: 13, XMNCP: 14, ZLQW: 1 }, 1],
      ZLQW: [{ LTCX: 2, VRPVC: 1, XDBXC: 15 }, 6]
    });
  });
});

describe("getRequirements", () => {
  it("should return the total ORE required", () => {
    expect(getRequirements(example1, "FUEL")).toEqual({ ORE: 31 });
    expect(getRequirements(example2, "FUEL")).toEqual({ ORE: 165 });
    expect(getRequirements(example3, "FUEL")).toEqual({ ORE: 13312 });
    expect(getRequirements(example4, "FUEL")).toEqual({ ORE: 180697 });
    expect(getRequirements(example5, "FUEL")).toEqual({ ORE: 2210736 });
  });

  it("should return the correct answer", () => {
    expect(getRequirements(input, "FUEL")).toEqual({ ORE: 273638 });
  });
});
