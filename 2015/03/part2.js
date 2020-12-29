const fs = require('fs');

const input = fs.readFileSync('./2015/03/input.txt', 'utf-8').toString()

const obj = {'0,0': 2}
let santa = [0, 0]
let robosanta = [0, 0]

let roboMovesNext = false;

// Movement function
function move(arr, i) {
  if (input[i] === '^') {
    ++arr[0];
  } else if (input[i] === 'v') {
    --arr[0];
  } else if (input[i] === '>') {
    ++arr[1];
  } else if (input[i] === '<') {
    --arr[1];
  }
  let houseName = arr.toString();
  obj[houseName] ? ++obj[houseName] : obj[houseName] = 1;
}

// Main function
for (let i = 0; i < input.length; i++) { 
  if (roboMovesNext) {
    move(robosanta, i);
    roboMovesNext = false;
  } else {
    move(santa, i)
    roboMovesNext = true;
  }
}

console.log('Part 2 Answer:', Object.keys(obj).length, 'houses')