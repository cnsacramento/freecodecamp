const package = require('./package.json');

console.log('\n- All Json data\n');
console.log(package);

console.log('\n- What is the type of package json?\n');
console.log(typeof package);

console.log('\n- Access to a specific property\n');
console.log(`author: ${package.author}`);

console.log('\n- Convert a JSON to a String\n');
const jsonString = JSON.stringify(package);
console.log(jsonString);
console.log(typeof jsonString)

console.log('\n- Convert a String json to an object\n');
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);
