import {getNameByParameters} from "../util/utils";


test('adds 1 + 2 to equal 3', () => {
  expect(getNameByParameters("num2", true)).toBe("num3");
});