import { linkedListFromArray } from "../../utils/mock/linkedList";
import { reverseList } from "./solution";

const arr1 = [1, 2];
const list1 = linkedListFromArray(arr1);
const recersedList1 = linkedListFromArray(arr1.reverse());

const arr2 = [1, 2, 3, 4, 5];
const list2 = linkedListFromArray(arr2);
const recersedList2 = linkedListFromArray(arr2.reverse());

const emptyList = null;

test('1, 2] => [2, 1]', () => {
  expect(reverseList(list1)).toEqual(recersedList1);
});

test('[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]', () => {
  expect(reverseList(list2)).toEqual(recersedList2);
});

test('[] => []', () => {
  expect(reverseList(emptyList)).toEqual(emptyList);
});

// [1, 2]
// prev = null
// next {val: 2, next: null}
// mut1 {val: 1, next: null}
// reverseList(next, mut1)
//
// next: null
// mut2 {val: 2, next: {val: 1, next: null}}
// reverseList(null, mut2)
//
// return {val: 2, next: {val: 1, next: null}}

// [1, 2, 3]
// prev = null
// next {val: 2, next: {val: 3, next: null}}
// mut1 {val: 1, next: null}
// reverseList(next, mut1)
//
// next: val: 3, next: null}
// mut2 {val: 2, next: {val: 1, next: null}}
// reverseList(next, mut2)
//
// next: null
// mut3 {val: 3, next: {val: 2, next: {val: 1, next: null}}}
// reverseList(null, mut3)
//
// return {val: 3, next: {val: 2, next: {val: 1, next: null}}}