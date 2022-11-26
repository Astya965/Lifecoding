# Same Tree

Link: https://leetcode.com/problems/same-tree/description/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

** Example 1: **
> Input: p = [1,2,3], q = [1,2,3]
> Output: true

** Example 2: **
> Input: p = [1,2], q = [1,null,2]
> Output: false

** Example 3: **
> Input: Input: p = [-1,2,1], q = [-1,1,2]
> Output: false