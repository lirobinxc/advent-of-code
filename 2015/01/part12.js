const fs = require('fs')

const file = fs.readFileSync('./2015/01/input.txt', (err, data) => {
  if (err) console.error('Read file error');
})

const input = file.toString();

// Part 1
function question1() {
  let currentFloor = 0;

  for (let i of input) {
    if (i === '(') {
      ++currentFloor
    } else --currentFloor;
  }

  console.log('Part 1 Answer:', currentFloor)
}

// Part 2
function question2() {
  const arr = input.split('')
  let currentFloor = 0;
  let answer = arr.map(i => {
    return i === '('
    ? ++currentFloor
    : --currentFloor;
  })
  console.log('Part 2:', answer.indexOf(-1) + 1)
}
question2();