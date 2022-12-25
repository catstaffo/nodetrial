const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// values in this case in the resulting txt file result-sync will be overwritten by node based on latest output of this method
// if there is no flag: bc 'w' is default
// if 'a': this will append
// 'aw'
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`, {flag:'a'}
);
console.log('done with this task');
console.log('starting the next one');
