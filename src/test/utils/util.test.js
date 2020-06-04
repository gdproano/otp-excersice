import {getNameByParameters, validateEnableButton} from "../../util/utils";
import {TIMER_ZERO} from "../../constants/general";


test('Get name of variable dynamic [num2 and op = true] shouldBe num3', () => {
    expect(getNameByParameters("num2", true)).toBe("num3");
});

test('Get name of variable dynamic [num3 and op = false] shouldBe num2', () => {
    expect(getNameByParameters("num3", false)).toBe("num2");
});

test('ValidateEnableButton when timer is > 0 shouldBe false', () => {
    expect(validateEnableButton({num1: 1, num2: 1, num3: 1, num4: 1, num5: 1, num6: 1}, {timer: 123})).toBe(true);
});

test('ValidateEnableButton whe missin the 6 numbers shouldBe false', () => {
    expect(validateEnableButton({num1: 1, num2: 1, num3: 1, num4: 1}, {timer: 123})).toBe(false);
});


test('ValidateEnableButton when timer is 0 shouldBe false', () => {
    expect(validateEnableButton({num1: 1}, {timer: TIMER_ZERO})).toBe(false);
});