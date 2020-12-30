const fs = require('fs');

const input = fs.readFileSync('./2015/02/input.txt', 'utf-8').toString()

// Process input into a sorted array of arrays
const arr = input.split('\n').map(i => i.split('x').sort((a, b) => a - b))

// Part 1
let totalWrapNeeded = 0;

for (const i of arr) {
  const l = i[0];
  const w = i[1];
  const h = i[2];
  let surfaceArea = 2 * (l*w + l*h + w*h)
  let extra = i[0] * i[1]
  totalWrapNeeded += (surfaceArea + extra)
}
console.log('Total wrap needed:', totalWrapNeeded, 'feet')

// Part 2
let totalRibbonNeeded = 0;

for (const i of arr) {
  const l = i[0];
  const w = i[1];
  const h = i[2];
  let ribbon = l*2 + w*2;
  let bow = l*w*h
  totalRibbonNeeded += (ribbon + bow);
}
console.log('Total ribbon needed:', totalRibbonNeeded, 'feet')
