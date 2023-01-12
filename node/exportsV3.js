module.exports = {
    greetingV3: greetingV3, 
    greetingsToV3: greetingsToV3
}

function greetingV3() {
    return 'Welcome to Node.js';
}

function greetingsToV3(name) {
    return `Welcome ${name}`
}

console.log(module.exports);