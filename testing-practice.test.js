const testingPractice = require('./testing-practice');
import {capitalize} from './testing-practice';
import {reverseString} from './testing-practice';
import { calculator } from './testing-practice';
import { caeserCipher } from './testing-practice';
import { analyzeArray } from './testing-practice';

it('capitalize cat to Cat', () => {
    expect(capitalize('cat')).toMatch(/^Cat/);
});

it('capitalize this is the cat to This Is The Cat', () => {
    expect(capitalize('this is the cat')).toMatch(/^This Is The Cat/);
});

it('reverse banana to ananab', () => {
    expect(reverseString('banana')).toMatch(/^ananab/);
});

it('reverse this is the sentence to ecnetnes eht si siht', () => {
    expect(reverseString('this is the sentence')).toMatch(/^ecnetnes eht si siht/);
});

it('1 + 5 = 6', () => {
    expect(calculator.add(1, 5)).toBe(6);
});

it('1 - 5 = -4', () => {
    expect(calculator.subtract(1, 5)).toBe(-4);
});

it('10 * 5 = 50', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
});

it('100 / 4 = 25', () => {
    expect(calculator.divide(100, 4)).toBe(25);
});

it('shift Zebra and monkey one letter over', () => {
    expect(caeserCipher("Zebra and monkey", 1)).toMatch(/^afcsb boe npolfz/)
})

it('Return average: 4, min: 1, , max: 8, length: 6 from array [1,8,3,4,2,6])', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4, 
        min: 1, 
        max: 8, 
        length: 6
    })
})