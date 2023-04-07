import { TreeNode } from "../../types";

export const getWidthOfBinaryTree = (root: TreeNode | null) => {
    const minPos = [0];
    let maxWidth = 0;

    //Depth-first search
    const callDFS = (node: TreeNode | null, level: number, pos: number) => {
        if (!node) {
            return;
        }
        if (minPos[level] === undefined) {
            minPos.push(pos);
        }

        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff + 1); 

        callDFS(node.left, level + 1, diff * 2);
        callDFS(node.right, level + 1, diff * 2 + 1);
    }

    if (root && root.val !== null) {
        callDFS(root, 0, 0);
    }
    return maxWidth;
}