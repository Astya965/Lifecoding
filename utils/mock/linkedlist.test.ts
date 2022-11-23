import {ListNode, linkedListFromArray} from './linkedList';

const emptyArr = []

const arr1 = [1, 2, 3];
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));

const arr2 = [0, -1];
const list2 = new ListNode(0, new ListNode(-1, null));

test('[]', () => {
    expect(linkedListFromArray(emptyArr)).toStrictEqual(null);
});

test('[1, 2, 3]', () => {
    expect(linkedListFromArray(arr1)).toStrictEqual(list1);
});

test('[0, -1]', () => {
    expect(linkedListFromArray(arr2)).toStrictEqual(list2);
});