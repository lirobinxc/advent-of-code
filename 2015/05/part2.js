const fs = require('fs');

const arr = fs.readFileSync('./2015/05/input.txt', 'utf-8').split('\n')
const isContainPair = string => /([a-z][a-z]).*\1/.test(string);
const isContainRepeatLetter = string => /([a-z])[a-z]\1/.test(string);

const isNiceString = string => !!(isContainPair(string) && isContainRepeatLetter(string));

const result = arr.reduce((total, string) => isNiceString(string) ? ++total : total, 0);

console.log(result);