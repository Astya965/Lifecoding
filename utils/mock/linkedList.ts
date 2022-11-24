import { ListNode } from "../../types";

export const linkedListFromArray = (arr: number[], i: number = 0): ListNode | null => {
    if (i < arr.length) {
        return new ListNode(arr[i], linkedListFromArray(arr, i + 1));
    }
    return null;
};

// TO DO Find way to create list with real cycle
export const linkedListWithFakeCycleFromArray = (arr: number[], i: number = 0, cycled = false) => {
    if (i < arr.length) {
        return new ListNode(arr[i], linkedListWithFakeCycleFromArray(arr, i + 1, cycled));
    } else if (!cycled) {
        return new ListNode(arr[0], linkedListWithFakeCycleFromArray(arr, 0, true));
    }
    return null;
};