import { ListNode } from "../../types";

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