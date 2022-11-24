import { ListNode } from "../../types";

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null => {
    if (l1 || l2 || carry) {
        const v1 = l1 && l1.val ? l1.val : 0;
        const v2 = l2 && l2.val ? l2.val : 0;

        let sum = v1 + v2 + carry;
        carry = 0;

        if (sum >= 10) {
            carry++;
            sum = sum - 10;
        }

        return new ListNode(
            sum, 
            addTwoNumbers(
                l1 ? l1.next : null, 
                l2 ? l2.next : null,
                carry
            )
        );
    }
    return null; // next for last element
};