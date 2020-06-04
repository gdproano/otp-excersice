export const getNameByParameters = (num, op) => {
    const number = parseInt(num.slice(-1));
    if (op) {
        return `num${number === 6 ? number : number + 1}`;
    } else {
        return `num${number - 1}`;
    }
}