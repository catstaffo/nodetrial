/* for npm local dependency in one particular project: npm i <packageName>
for npm globabl dependency in any project: npm install -g <packageName>
create package.json: npm init -y*/
const _ = require('lodash');

const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
