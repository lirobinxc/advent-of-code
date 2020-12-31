const fs = require('fs');

const rawArr = fs.readFileSync('./2015/07/input.txt', 'utf-8').split('\n');
const INPUT = []

for (let i of rawArr) {
  let tmp = i.split(' -> ')
  let wire = tmp[1]
  let action = tmp[0].split(' ')
  let obj = {
    action: action,
    wire: wire
  }
  INPUT.push(obj)
}
console.log(INPUT)

function uint16 (n) {
  return n & 0xFFFF;
}

const RESULT = {};

// Bitwise Methods
const Bitwise = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  LSHIFT: (a, x) => a << x,
  RSHIFT: (a, x) => a >> x,
  NOT: (a) => !a
}

function calculate(action) {

  if (typeof(action) === 'number') return action;

  if (action.includes('AND')) {
    let a = RESULT[action[0]]
    let b = RESULT[action[2]]
    return Bitwise.AND(calculate(a) & calculate(b))

  } else if (action.includes('OR')) {
    RESULT[key] = RESULT[action[0]] | RESULT[action[2]]
  } else if (action.includes('LSHIFT')) {
    RESULT[key] = RESULT[action[0]] << action[2]
  } else if (action.includes('RSHIFT')) {
    RESULT[key] = RESULT[action[0]] >> action[2]
  } else if (action.includes('NOT')) {
    RESULT[key] = ~RESULT[action[1]]
  }

  return Number(action)
}

// 1) Initial Process of RESULT object
function fillRESULT() {
  for (let i of INPUT) {
    let wire = i.wire;
    let action = i.action;
    
    if (isNaN(Number(action[0]))) RESULT[wire] = action;
    if (!isNaN(Number(action[0]))) RESULT[wire] = Number(action[0]);
  }
}
fillRESULT();

// 2) Recursively process RESULT
for (let key in RESULT) {
  if (typeof(RESULT[key]) === 'number') return;

  let action = RESULT[key]
  RESULT[key] = calculate(action);
}

console.log('RESULT', RESULT)
console.log('RESULT', RESULT)
