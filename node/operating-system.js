const os = require('os');

console.log('\nOS data\n');
console.log(os);

console.log('\nUserinfo\n');
console.log(os.userInfo());

console.log('\nHomedir\n');
console.log(os.homedir());

console.log('\nCpus\n');
console.log(os.cpus());

console.log('\nPlataform\n');
console.log(os.platform());

console.log('\nAlso plataform\n');
console.log(os.type());

console.log('\nNetwork information\n');
console.log(os.networkInterfaces());