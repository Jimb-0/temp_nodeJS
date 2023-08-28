// npm - global command, comes with node
// npm --v (check version)

//local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// automation approach
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = ['brands',['logos',['graphics','fonts']], 'names']
const newItems = _.flattenDeep(items);
console.log(newItems)
