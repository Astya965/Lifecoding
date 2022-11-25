import { linkedListFromArray } from "../../utils/mock/linkedList";
import { mergeKLists } from "./solution";

const arr1 = [1];
const arr2 = [1, 2];
const arr3 = [3, 4];
const listOfLists = [linkedListFromArray(arr1), linkedListFromArray(arr2), linkedListFromArray(arr3)];
const result1 = linkedListFromArray(arr1.concat(arr2).concat(arr3));

const emptyList = [];
const listOfEmptyList = [linkedListFromArray([]), linkedListFromArray([])];
const emptyResult = null;

test('[[1, 2], [1], [3, 4]] => [1, 1, 2, 3, 4]', () => {
  expect(mergeKLists(listOfLists)).toEqual(result1);
});

test('[[][]] => []', () => {
  expect(mergeKLists(listOfEmptyList)).toEqual(emptyResult);
});

test('[] => []', () => {
  expect(mergeKLists(emptyList)).toEqual(emptyResult);
});