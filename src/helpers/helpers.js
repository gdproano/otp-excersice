export const transformCounter = counter => {
    const format = val => (val < 10 ? '0' : '') + val;
    const minutes = Math.floor((counter % (1000 * 60 * 60)) / (60));
    const distance = counter - (minutes * 60);
    const seconds = Math.floor((distance % (1000 * 60)));
    return `${format(minutes)}:${format(seconds)}`
}

const VALID_NUMBER_PATERN = /^\d+$/;

export const isValidNumber = number => number !== '' && !VALID_NUMBER_PATERN.test(number)

export const keepOnlyNumberCharacters = (val = '') => {
    const numRegex = new RegExp(`\\d`, 'g');
    return (val.match(numRegex) || []).join('')
}
