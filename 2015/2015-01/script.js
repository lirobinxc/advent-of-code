const fs = require('fs')

console.time('TIMER'); // START timer

const file = fs.readFileSync('./2015/2015-01/input.txt', (err, data) => {
  if (err) console.error('Read file error');
})

const input = file.toString();

let currentFloor = 0;

for (let i of input) {
  if (i === '(') {
    currentFloor++
  } else currentFloor--;
}

console.log(currentFloor)

console.timeEnd('TIMER'); // END Timer