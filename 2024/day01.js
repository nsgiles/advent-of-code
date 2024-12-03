/**
 * Advent of Code 2024 Day 1
 * https://adventofcode.com/2024/day/1
 * Input: https://adventofcode.com/2024/day/1/input
 */

const DATA = `
// Input above.
`;

// Form two arrays from left column and right column and sort by value
const list1 = DATA.match(/\d+(?= )/g).sort((a, b) => a - b);
const list2 = DATA.match(/\d+(?=\n)/g).sort((a, b) => a - b);

// Set a running total for distance and similarity
let distance = 0;
let similarity = 0;
for(i = 0; i < list1.length; i++) {
  // Distance
  distance += Math.abs(list1[i] - list2[i]);
  
  // Similarity
  const matches = list2.filter((item2) => list1[i] === item2);
  similarity += list1[i] * matches.length;
}

console.log(`Distance: ${distance}`);
console.log(`Similarity: ${similarity}`);
