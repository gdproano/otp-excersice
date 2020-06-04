import {TIMER_ZERO} from "../constants/general";

export const getNameByParameters = (num, op) => {
    const number = parseInt(num.slice(-1));
    if (op) {
        return `num${number === 6 ? number : number + 1}`;
    } else {
        return `num${number - 1}`;
    }
}


export const validateEnableButton = (form, timer) => {
    const isInputReady = !!form.num1 && !!form.num2 && !!form.num3
        && !!form.num4 && !!form.num5
    return isInputReady && timer !== TIMER_ZERO

}