module.exports = {
    greetingV2: greetingV2,
    greetingsToV2: greetingsToV2
}


function greetingV2() {
    return 'Welcome to Node.js';
}

function greetingsToV2(name) {
    return `Welcome ${name}`
}

console.log(module.exports);