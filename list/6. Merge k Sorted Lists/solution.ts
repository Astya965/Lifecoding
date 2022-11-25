import { ListNode } from "../../types";
import { linkedListFromArray } from "../../utils/mock/linkedList";

 export const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
    if (!lists || lists.length < 0) {
        return null;
    }

    const arr:  number[] = [];
    lists.forEach(node => {
        let temp = node;
        while (temp) {
            arr.push(temp.val);
            temp = temp.next;
        }
    });
    const sortedArr = arr.sort((v1, v2) => v1 - v2);
    return linkedListFromArray(sortedArr);
};