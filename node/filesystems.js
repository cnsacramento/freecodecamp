const fs = require('fs');


// Read the content of a file

// Without an error
/*
fs.readFile('file.html', 'UTF-8', (err, content) => {
    if(err) throw err;

    console.log(content);
});
*/

// With an error that does not stop the program
/*
fs.readFile('doesnotexist.html', 'UTF-8', (err, content) => {
    
    if(err) {
        console.log(`This is a normal error + ${err}`)
    } else {
        console.log(content);
    }
});
*/

// With an error that stop the program 
/*
fs.readFile('doesnotexist.html', 'UTF-8', (err, content) => {
    if(err) throw err;

    console.log(content);
});
*/

// Copy the file to another

/*
fs.copyFile('file.html', 'copy.html', (err) => {
    if(err) throw err;
    console.log('The file was successfully copied');
});
*/

// Rename the file

/*
fs.rename('copy.html', 'new-name.html', (err) => {
    if(err) throw err;
    console.log('Congratulation you have successfully changed the name');
});
*/

// Write a new file or rewrite it

/*
fs.writeFile('new-name.html', 'This will rewrite the file', (err) => {
    if(err) throw err;
    console.log("File written successfully.");
});
*/

// Write a file without rewriting it

/*
fs.appendFile('new-name.html', '<p>This will not rewrite the file</p>', (err) => {
    if(err) throw err;
    console.log('File written successfully.');
});
*/


// Remove a file

fs.unlink('new-name.html', (err) => {
    if(err) throw err;
    console.log('File was removed successfully')
});

// All the above methods are async, for sync just add Sync to the end of method name