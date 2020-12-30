const fs = require('fs');

const arr = fs.readFileSync('./2015/05/input.txt', 'utf-8').split('\n')
const niceArr = []
const naughtyArr = []

for (const name of arr) {

  if (name.match(/[aeiou]/g) != null
  && name.match(/[aeiou]/g).length >= 3
  && name.match(/([a-zA-Z0-9])\1{1,}/g) != null
  && name.match(/([a-zA-Z0-9])\1{1,}/g).length >= 1
  && name.match(/(\b((?!(ab))\w)+\b)/g)
  && name.match(/(\b((?!(cd))\w)+\b)/g)
  && name.match(/(\b((?!(pq))\w)+\b)/g)
  && name.match(/(\b((?!(xy))\w)+\b)/g)
  ) {
    niceArr.push(name)
  } else naughtyArr.push(name)
}

console.log(niceArr.length)