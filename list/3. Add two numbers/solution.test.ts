import { linkedListFromArray } from '../../utils/mock/linkedList';
import { addTwoNumbers } from "./solution";

const firstList1 = linkedListFromArray([2,4,3]);
const secondList1 = linkedListFromArray([5,6,4]);
const result1 = linkedListFromArray([7,0,8]);

const firstList2 = linkedListFromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const secondList2 = linkedListFromArray([5,6,4]);
const result2 = linkedListFromArray([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);

const emptyList = linkedListFromArray([0]);

test('[2, 4, 3], [5, 6, 4] => [7, 0, 8]', () => {
  expect(addTwoNumbers(firstList1, secondList1)).toEqual(result1);
});

test('[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4] => [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]', () => {
  expect(addTwoNumbers(firstList2, secondList2)).toEqual(result2);
});

test('[0], [0] => [0]', () => {
  expect(addTwoNumbers(emptyList, emptyList)).toEqual(emptyList);
});