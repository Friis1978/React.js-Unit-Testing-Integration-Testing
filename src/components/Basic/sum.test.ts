import { sum } from "./sum";

it("suming 5 and 2 will be 7", () => {
  //const a: string = 5;
  //expect(a).toBe(5)
  expect(sum(5, 2)).toBe(7);
});