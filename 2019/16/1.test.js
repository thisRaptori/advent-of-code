import { cleanSignal } from "./1";
import input from "./input";

describe("cleanSignal", () => {
  it("should work for the simple examples", () => {
    expect(cleanSignal("12345678", 1)).toEqual("48226158");
    expect(cleanSignal("12345678", 2)).toEqual("34040438");
    expect(cleanSignal("12345678", 3)).toEqual("03415518");
    expect(cleanSignal("12345678", 4)).toEqual("01029498");
  });

  it("should work for the large examples", () => {
    expect(
      cleanSignal("80871224585914546619083218645595", 100).slice(0, 8)
    ).toEqual("24176176");
    expect(
      cleanSignal("19617804207202209144916044189917", 100).slice(0, 8)
    ).toEqual("73745418");
    expect(
      cleanSignal("69317163492948606335995924319873", 100).slice(0, 8)
    ).toEqual("52432133");
  });

  it("should work for the actual input", () => {
    expect(cleanSignal(input, 100).slice(0, 8)).toEqual("96136976");
  });
});
