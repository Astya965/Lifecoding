import { ListNode, reverseList } from "./solution";

const testList1 = new ListNode(1, new ListNode(2, null));
const testReversedList1 = new ListNode(2, new ListNode(1, null));

const testList2 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
const testReversedList2 = new ListNode(3, new ListNode(2, new ListNode(1, null)));

const testEmptyList = null;

test('[1, 2] => [2, 1]', () => {
  expect(reverseList(testList1)).toStrictEqual(testReversedList1);
});

test('[1, 2, 3] => [3, 2, 1]', () => {
  expect(reverseList(testList2)).toStrictEqual(testReversedList2);
});

test('[] => []', () => {
  expect(reverseList(testEmptyList)).toStrictEqual(testEmptyList);
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