// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// TO DO Find way to test first solution with Set<ListNode>
 export const hasCycle = (head: ListNode | null, acc: Set<ListNode> = new Set()): boolean => {
    if (head === null) {
        return false;
    } 
    if (acc.has(head)) {
        return true;
    }
    acc.add(head);
    return hasCycle(head.next, acc);
};

export const hasCycleForTest = (head: ListNode | null, acc: Set<number> = new Set()): boolean => {
    if (head === null) {
        return false;
    } 
    if (acc.has(head.val)) {
        return true;
    }
    acc.add(head.val);
    return hasCycleForTest(head.next, acc);
};