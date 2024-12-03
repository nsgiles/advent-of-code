/**
 * Advent of Code 2024 Day 3
 * https://adventofcode.com/2024/day/3
 */

const INPUT = `
// Input above.
`;

function mul(x, y) {
  return x * y;
}

const instructions = INPUT.match(/mul\(\d{1,3}\,\d{1,3}\)/g);

let rawTotal = 0;
instructions.forEach((instruction) => {
  const num1 = instruction.match(/\d+(?=\,)/);
  const num2 = instruction.match(/\d+(?=\))/);
  rawTotal += mul(num1, num2);
});

console.log(`Raw total: ${rawTotal}`);

const filteredInstructions = INPUT.replace(/\n/g, '').replace(/(don\'t\(\)).*?(do\(\)|\n|$)/g, '').match(/mul\(\d{1,3}\,\d{1,3}\)/g);

let filteredTotal = 0;
filteredInstructions.forEach((instruction) => {
  const num1 = instruction.match(/\d{1,3}(?=\,)/);
  const num2 = instruction.match(/\d{1,3}(?=\))/);
  filteredTotal += mul(num1, num2);
});

console.log(`Filtered total: ${filteredTotal}`);
