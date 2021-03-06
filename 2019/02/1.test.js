import { compute } from "./1";
import input from "./input";

describe("compute", () => {
  it("should pass examples", () => {
    expect(compute(1, 0, 0, 0, 99)).toEqual([2, 0, 0, 0, 99]);
    expect(compute(2, 3, 0, 3, 99)).toEqual([2, 3, 0, 6, 99]);
    expect(compute(2, 4, 4, 5, 99, 0)).toEqual([2, 4, 4, 5, 99, 9801]);
    // prettier-ignore
    expect(compute(1, 1, 1, 4, 99, 5, 6, 0, 99)).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  it("should print the actual result", () => {
    // prettier-ignore
    expect(compute(...input)).toEqual([6730673, 12, 2, 2, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 36, 1, 19, 6, 38, 2, 6, 23, 76, 2, 27, 9, 228, 1, 5, 31, 229, 1, 35, 10, 233, 2, 39, 9, 699, 1, 5, 43, 700, 2, 47, 10, 2800, 1, 51, 6, 2802, 1, 5, 55, 2803, 2, 6, 59, 5606, 2, 63, 6, 11212, 1, 5, 67, 11213, 1, 71, 9, 11216, 2, 75, 10, 44864, 1, 79, 5, 44865, 1, 10, 83, 44869, 1, 5, 87, 44870, 2, 13, 91, 224350, 1, 95, 10, 224354, 2, 99, 13, 1121770, 1, 103, 5, 1121771, 1, 107, 13, 1121776, 2, 111, 9, 3365328, 1, 6, 115, 3365330, 2, 119, 6, 6730660, 1, 123, 6, 6730662, 1, 127, 9, 6730665, 1, 6, 131, 6730667, 1, 135, 2, 6730669, 1, 139, 10, 0, 99, 2, 0, 14, 0]);
  });
});
