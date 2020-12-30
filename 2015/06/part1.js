const fs = require('fs');
const { endianness } = require('os');

const rawArr = fs.readFileSync('./2015/06/input.txt', 'utf-8').split('\n')
const INPUT = [];

// Process data into an array of objects called INPUT
for (let i of rawArr) {
  let temp = i.match(/(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/)
  let tempObj = {
    action: temp[1],
    x1: Number(temp[2]),
    y1: Number(temp[3]),
    x2: Number(temp[4]),
    y2: Number(temp[5])
  }
  INPUT.push(tempObj);
}

const LIGHTS = new Uint8Array(1000 * 1000);

// Iterate INPUT instructions
for (let obj of INPUT) {
  for (let i = obj.x1; i <= obj.x2; i++) {
    for (let j = obj.y1; j <= obj.y2; j++) {
      let index = (i * 1000) + j
      if (obj.action === 'turn on') LIGHTS[index] = 1;
      if (obj.action === 'turn off') LIGHTS[index] = 0;
      if (obj.action === 'toggle') LIGHTS[index] = LIGHTS[index] === 1 ? 0 : 1;
    }
  }
}

console.log(LIGHTS.filter(i => i === 1).length)