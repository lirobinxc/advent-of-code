const fs = require('fs');

const input = fs.readFileSync('./2015/03/input.txt', 'utf-8').toString()

const obj = {'0,0': 1}
let currentHouse = [0, 0]

for (let i = 0; i < input.length; i++) { 
  if (input[i] === '^') {
    ++currentHouse[0];
  } else if (input[i] === 'v') {
    --currentHouse[0];
  } else if (input[i] === '>') {
    ++currentHouse[1];
  } else if (input[i] === '<') {
    --currentHouse[1];
  }
  
  let houseName = currentHouse.toString();
  obj[houseName] ? ++obj[houseName] : obj[houseName] = 1
}

console.log('Part 1 Answer:', Object.keys(obj).length, 'houses')