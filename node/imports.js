const greetings = require('./exportsV1.js');
const { greetingsToV2 } = require('./exportsV2.js');

console.log("\nV1");
console.log(greetings.greetingV1());
console.log(greetings.greetingsToV1('Christian'));

const greetingsV2 = require('./exportsV2.js');

console.log("\nV2");

console.log(greetingsV2.greetingV2());
console.log(greetingsV2.greetingsToV2("Chris"));

const { greetingV3 } = require('./exportsV3.js');
const { greetingsToV3 } = require('./exportsV3.js');

console.log("\nV3: Desestructuration");

console.log(greetingV3());
console.log(greetingsToV3("ChrissS"));
