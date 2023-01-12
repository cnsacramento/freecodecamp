module.exports.greetingV1 = greetingV1;
module.exports.greetingsToV1 = greetingsToV1;

function greetingV1() {
    return 'Welcome to Node.js';
}

function greetingsToV1(name) {
    return `Welcome ${name}`
}

console.log(module.exports);

