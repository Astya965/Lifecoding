# Reverse Linked List

Link: https://leetcode.com/problems/reverse-linked-list/description/

Given the head of a singly linked list, reverse the list, and return the reversed list. 

## Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

** Example 1: **
> [1, 2, 3, 4, 5]
> [5, 4, 3, 2, 1]

** Example 2: **
> []
> []