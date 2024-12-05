/**
 * Advent of Code 2024 Day 5
 * https://adventofcode.com/2024/day/5
 */

const INPUT = `
// Input above.
`;

// Get rules as objects with before and after.
const rules = INPUT.match(/\d{2}\|\d{2}/g).map(pair => {
  const [before, after] = pair.split("|");
  return {
    before: parseInt(before, 10),
    after: parseInt(after, 10)
  };
});

// Get updates as a 2D array.
const updates = INPUT.match(/\d{2}\,.*/g).map(str => {
  return str.split(',').map(Number); // Split by commas and convert each element to a number
});



// Categorise updates as in order/out of order.
// Count the total values of all the middle pags already in order.
let updatesOutOfOrder = [];
let updatesInOrder = [];

updates.forEach(update => {
  let isOutOfOrder = false;
  for (const rule of rules) {
    if (update.includes(rule.before) && update.includes(rule.after) && update.indexOf(rule.before) > update.indexOf(rule.after)) {
      isOutOfOrder = true;
      break;
    }
  }
  if(isOutOfOrder) {
    updatesOutOfOrder.push(update);
  } else {
    updatesInOrder.push(update);
  }
})

let inOrderMiddlePages = 0;
updatesInOrder.forEach(update => {
  inOrderMiddlePages += update[Math.floor((update.length) / 2)];
})

console.log(`In order middle pages total: ${inOrderMiddlePages}`);

// Now, sort all the unorder ones then get their middle page values.

updatesOutOfOrder.forEach(update => {
  let loop = true;
  do {
    loop = false;
    rules.forEach(rule => {
      if (update.includes(rule.before) && update.includes(rule.after) && update.indexOf(rule.before) > update.indexOf(rule.after)) {
        let beforeIndex = update.indexOf(rule.before);
        let afterIndex = update.indexOf(rule.after);

        let [beforeElement] = update.splice(beforeIndex, 1);

        update.splice(afterIndex, 0, beforeElement);

        loop = true;
      }
    })
  } while (loop)
})

let otherUpdatesOrdered = 0;
updatesOutOfOrder.forEach(update => {
  otherUpdatesOrdered += update[Math.floor((update.length) / 2)];
})

console.log(`Other middle pages now ordered total: ${otherUpdatesOrdered}`);
