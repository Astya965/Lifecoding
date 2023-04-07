import { TreeNode } from "../../types";
import { isSameTree } from "./solution";

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2));
const emptyTree = new TreeNode();

test("[1, 2, 3], [1, 2, 3] => true", () => {
  expect(isSameTree(tree1, tree1)).toEqual(true);
});

test("[1, 2, 3], [1, 2] => false", () => {
  expect(isSameTree(tree1, tree2)).toEqual(false);
});

// test("[], [] => false", () => {
//   expect(isSameTree(emptyTree, emptyTree)).toEqual(true);
// });
