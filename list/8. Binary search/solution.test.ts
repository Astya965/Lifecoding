import { binarySearch } from "./solution";

const arr1 = [-1, 0, 5, 8, 11];
const target1 = 8;
const answer1 = 4;

const arr2 = [1, 2, 3];
const target2 = 8;
const answer2 = -1; 

const arr3 = [5];
const target3 = 5;
const answer3 = 0;

test('[-1, 0, 5, 8, 11], 8 => 4', () => {
    expect(binarySearch(arr1, target1)).toEqual(answer1);
});

test('[1, 2, 3], 8 => -1', () => {
    expect(binarySearch(arr2, target2)).toEqual(answer2);
});

test('[5], 5 => 0', () => {
    expect(binarySearch(arr3, target3)).toEqual(answer3);
});  