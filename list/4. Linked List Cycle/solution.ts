import { ListNode } from "../../types";

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