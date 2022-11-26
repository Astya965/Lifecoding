import { TreeNode } from "../../types";

export const isSameTree = (p: TreeNode | null | undefined, q: TreeNode | null | undefined): boolean => {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    
};