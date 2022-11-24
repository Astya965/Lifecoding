import { reverse, reverseWithLoop } from "./solution";

const number1 = 235;
const reversed1 = 532;

const number2 = -91111;
const reversed2 = -11119;

const number3 = Math.pow(2, 35);
const result3 = 0;

test('235 => 532', () => {
  expect(reverse(number1)).toEqual(reversed1);
});

test('-91111 => -11119', () => {
  expect(reverse(number2)).toEqual(reversed2);
});

test('2**35 => 0', () => {
  expect(reverse(number3)).toEqual(result3);
});


test('235 => 532', () => {
  expect(reverseWithLoop(number1)).toEqual(reversed1);
});

test('-91111 => -11119', () => {
  expect(reverseWithLoop(number2)).toEqual(reversed2);
});

test('2**35 => 0', () => {
  expect(reverseWithLoop(number3)).toEqual(result3);
});
