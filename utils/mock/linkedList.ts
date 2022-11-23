export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export const linkedListFromArray = (arr: number[], i: number = 0): ListNode | null => {
    if (i < arr.length) {
        return new ListNode(arr[i], linkedListFromArray(arr, i + 1));
    }
    return null;
};