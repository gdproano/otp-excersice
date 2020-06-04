export const transformCounter = counter => {
    const format = val => (val < 10 ? '0' : '') + val;
    const minutes = Math.floor((counter % (1000 * 60 * 60)) / (60));
    const distance = counter - (minutes * 60);
    const seconds = Math.floor((distance % (1000 * 60)));
    return `${format(minutes)}:${format(seconds)}`;
}
