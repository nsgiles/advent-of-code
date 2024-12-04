/**
 * Advent of Code 2024 Day 4
 * https://adventofcode.com/2024/day/4
 */

const INPUT =`
// Input above.
`;

function searchDirectionsA(i, j) {
  // Direction '1'
  if(rows[i-1] && rows[i-1].charAt(j-1) === "M" &&
     rows[i-2] && rows[i-2].charAt(j-2) === "A" &&
     rows[i-3] && rows[i-3].charAt(j-3) === "S") {
    foundA++;
  }
  
  // Direction '2'
  if(rows[i-1] && rows[i-1].charAt(j) === "M" &&
     rows[i-2] && rows[i-2].charAt(j) === "A" &&
     rows[i-3] && rows[i-3].charAt(j) === "S") {
    foundA++;
  }
  
  // Direction '3'
  if(rows[i-1] && rows[i-1].charAt(j+1) === "M" &&
     rows[i-2] && rows[i-2].charAt(j+2) === "A" &&
     rows[i-3] && rows[i-3].charAt(j+3) === "S") {
    foundA++;
  }
  
  // Direction '4'
  if(rows[i].charAt(j-1) === "M" &&
     rows[i].charAt(j-2) === "A" &&
     rows[i].charAt(j-3) === "S") {
    foundA++;
  }
  
  // Direction '6'
  if(rows[i].charAt(j+1) === "M" &&
     rows[i].charAt(j+2) === "A" &&
     rows[i].charAt(j+3) === "S") {
    foundA++;
  }
  
  // Direction '7'
  if(rows[i+1] && rows[i+1].charAt(j-1) === "M" &&
     rows[i+2] && rows[i+2].charAt(j-2) === "A" &&
     rows[i+2] && rows[i+3].charAt(j-3) === "S") {
    foundA++;
  }
  
  // Direction '8'
  if(rows[i+1] && rows[i+1].charAt(j) === "M" &&
     rows[i+2] && rows[i+2].charAt(j) === "A" &&
     rows[i+3] && rows[i+3].charAt(j) === "S") {
    foundA++;
  }
  
  // Direction '9'
  if(rows[i+1] && rows[i+1].charAt(j+1) === "M" &&
     rows[i+2] && rows[i+2].charAt(j+2) === "A" &&
     rows[i+3] && rows[i+3].charAt(j+3) === "S") {
    foundA++;
  }
}

function searchDirectionsB(i, j) {
  // Ms on top
  if(rows[i-1] && rows[i-1].charAt(j-1) === "M" &&
     rows[i-1] && rows[i-1].charAt(j+1) === "M" &&
     rows[i+1] && rows[i+1].charAt(j-1) === "S" &&
     rows[i+1] && rows[i+1].charAt(j+1) === "S") {
    foundB++;
  }
  
  // Ms on right
  else if(rows[i-1] && rows[i-1].charAt(j+1) === "M" &&
     rows[i+1] && rows[i+1].charAt(j+1) === "M" &&
     rows[i-1] && rows[i-1].charAt(j-1) === "S" &&
     rows[i+1] && rows[i+1].charAt(j-1) === "S") {
    foundB++;
  }
  
  // Ms on bottom
  else if(rows[i-1] && rows[i-1].charAt(j-1) === "S" &&
     rows[i-1] && rows[i-1].charAt(j+1) === "S" &&
     rows[i+1] && rows[i+1].charAt(j-1) === "M" &&
     rows[i+1] && rows[i+1].charAt(j+1) === "M") {
    foundB++;
  }
  
  // Ms on left
  else if(rows[i-1] && rows[i-1].charAt(j+1) === "S" &&
     rows[i+1] && rows[i+1].charAt(j+1) === "S" &&
     rows[i-1] && rows[i-1].charAt(j-1) === "M" &&
     rows[i+1] && rows[i+1].charAt(j-1) === "M") {
    foundB++;
  }
}

const rows = INPUT.match(/.+/gm);

let foundA = 0;
let foundB = 0;

for(i = 0; i < rows.length; i++) {

  for(j = 0; j < rows[i].length; j++) {
    if(rows[i].charAt(j) === "X") { searchDirectionsA(i, j); }
    if(rows[i].charAt(j) === "A") {
      searchDirectionsB(i, j);
    }
  }
  
}

console.log(`XMAS: ${foundA}`);
console.log(`X-MAS: ${foundB}`);
