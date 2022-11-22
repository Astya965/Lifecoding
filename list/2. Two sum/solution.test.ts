import { twoSum, fastTwoSum, anotherFastTwoSum } from "./solution";

const array1 = [2, 7, 11, 15];
const target1 = 9;
const answer1 = [0, 1];

const array2 = [7, 4, 4];
const target2 = 8;
const answer2 = [1, 2];

const emptyArray = [];

// twoSum
test('[2, 7, 11, 15], 9 => [0, 1]', () => {
  expect(twoSum(array1, target1)).toStrictEqual(answer1);
});

test('[7, 4, 4], 8 => [1, 2]', () => {
  expect(twoSum(array2, target2)).toStrictEqual(answer2);
});

test('[2, 7, 11, 15], 8 => []', () => {
  expect(twoSum(array1, target2)).toStrictEqual(emptyArray);
});

test('[] => []', () => {
  expect(twoSum(emptyArray, target2)).toStrictEqual(emptyArray);
});

// fastTwoSum
test('[2, 7, 11, 15], 9 => [0, 1]', () => {
  expect(fastTwoSum(array1, target1)).toStrictEqual(answer1);
});

test('[7, 4, 4], 8 => [1, 2]', () => {
  expect(fastTwoSum(array2, target2)).toStrictEqual(answer2);
});

test('[2, 7, 11, 15], 8 => []', () => {
  expect(fastTwoSum(array1, target2)).toStrictEqual(emptyArray);
});

test('[] => []', () => {
  expect(fastTwoSum(emptyArray, target2)).toStrictEqual(emptyArray);
});

// anotherFastTwoSum
test('[2, 7, 11, 15], 9 => [0, 1]', () => {
  expect(anotherFastTwoSum(array1, target1)).toStrictEqual(answer1);
});

test('[7, 4, 4], 8 => [1, 2]', () => {
  expect(anotherFastTwoSum(array2, target2)).toStrictEqual(answer2);
});

test('[2, 7, 11, 15], 8 => []', () => {
  expect(anotherFastTwoSum(array1, target2)).toStrictEqual(emptyArray);
});

test('[] => []', () => {
  expect(anotherFastTwoSum(emptyArray, target2)).toStrictEqual(emptyArray);
});