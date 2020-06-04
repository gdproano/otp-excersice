import { transformCounter, isValidNumber, keepOnlyNumberCharacters } from '../helpers/helpers';

test('transformCounter helper format 2 minutes to 02:00', () => {
    const TWO_MINUTES = 120
    const expected = '02:00'
    const value = transformCounter(TWO_MINUTES)
    expect(expected).toEqual(value)
});

test('isValidNumber helper check if 2.R is INVALID number, return true', () => {
    const invalidNumber = '2.R'
    const expected = true
    const value = isValidNumber(invalidNumber)
    expect(expected).toEqual(value)
});

test('keepOnlyNumberCharacters given 2.R, return only numbers, 2', () => {
    const invalidNumber = '2.R'
    const expected = '2'
    const value = keepOnlyNumberCharacters(invalidNumber)
    expect(expected).toEqual(value)
});
