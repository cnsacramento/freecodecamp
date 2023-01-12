console.log('\nAll information about process\n');
console.log(process);

console.log('\nEnvironment\n');
console.log(process.env);

console.log('\nArguments\n')
console.log(process.argv);

console.log('\nArgument at position 1\n');
console.log(process.argv[1]);

console.log('\nCurrent work directory\n');
console.log(process.cwd());

console.log('\nMemory usage\n');
console.log(process.memoryUsage());

console.log('\nTeminate Node.js process\n')
console.log(process.exit());