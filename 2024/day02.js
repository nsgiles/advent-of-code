/**
 * Advent of Code 2024 Day 2
 * https://adventofcode.com/2024/day/2
 * Input: https://adventofcode.com/2024/day/2/input
 */

const DATA = `
// Input above.
`;

const reports = DATA.match(/.+(?=\n)/g)

let safeWithoutDampener = 0;
let safeWithDampener = 0;

reports.forEach((report) => {
  const levels = report.match(/\d+/g);
  let safeUndampened = true;
  let safeDampened = true;
  let direction = null;
  let levelIgnored = false;
  for(i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if(safeDampened) {
      if(diff === 0 || Math.abs(diff) > 3) {
        safeUndampened = false;
        levelIgnored ? safeDampened = false : levelIgnored = true;
      } else if (diff < 0 && direction === 'rising' || diff > 0 && direction === 'falling') {
        safeUndampened = false;
        levelIgnored ? safeDampened = false : levelIgnored = true;
      }
      if(!direction && Math.abs(diff)) {
        diff < 0 ? direction = 'falling' : direction = 'rising';
      }
    }
  }
  if (safeUndampened) { safeWithoutDampener++; }
  if (safeDampened) { safeWithDampener++; }
});

console.log(`Safe without dampener: ${safeWithoutDampener}`);
console.log(`Safe with dampener: ${safeWithDampener}`);
