const md5 = require('md5');

const input = 'yzbqklnj'

function answer(input, n, string) {
  let num = 1;
  let hash = md5(1);
  while (hash.slice(0, n) != string) {
    ++num;
    let key = input + num;
    hash = md5(key);
  }
  console.log(hash.slice(0,n))
  console.log(num)
}

// Part 1
answer(input, 5, '00000');

// Part 2
answer(input, 6, '000000')