// npm - global command, comes with node
// npm --version

//local dependency
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
// sude n pm install -g <packageName> (mac)

//package.jsom - manifest file (stores important info about project)
//manual approach (create package.json in the root , create properties etc)
//npm init (step by step, press emter to skip)
//npm init -y(everythin default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)