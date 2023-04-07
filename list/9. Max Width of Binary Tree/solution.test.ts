import { TreeNode } from "../../types";
import { getWidthOfBinaryTree } from "./solution";

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2));
const emptyTree = new TreeNode();

const solution1 = 2;
const solution2 = 1;
const solutionForEmpty = 0;

test("[1, 2, 3] => 2", () => {
  expect(getWidthOfBinaryTree(tree1)).toEqual(solution1);
});

test("[1, 2] => 1", () => {
  expect(getWidthOfBinaryTree(tree2)).toEqual(solution2);
});

test("[], [] => 0", () => {
  expect(getWidthOfBinaryTree(emptyTree)).toEqual(solutionForEmpty);
});
