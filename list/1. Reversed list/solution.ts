// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


 export const reverseList = (head: ListNode | null, accumulation: ListNode | null = null): ListNode | null => {
    if (head === null) { // End of recursion
        return accumulation;
    }

    let next = head.next;
    head.next = accumulation; // Set prev value

    return reverseList(next, head);
};

// head - двигаемся вперед по списку 
// accumulation - записываем развернутый список