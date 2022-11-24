import { linkedListFromArray, linkedListWithFakeCycleFromArray } from "../../utils/mock/linkedList";
import { hasCycle, hasCycleForTest } from "./solution";

const arr1 = [1, 2];
const noncycledList = linkedListFromArray(arr1);
const cycledList = linkedListWithFakeCycleFromArray(arr1);

test('1, 2] => [2, 1]', () => {
  expect(hasCycleForTest(noncycledList)).toEqual(false);
});

test('[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]', () => {
  expect(hasCycleForTest(cycledList)).toEqual(true);
});