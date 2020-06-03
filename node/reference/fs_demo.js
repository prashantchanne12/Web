const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('Folder Created!');
// });

// Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World!',
//     {}, function (err) {
//         if (err) throw err;
//         console.log('File Created! and Written!');

//         // File Append
//         fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//             'Hello World!',
//             {}, function (err) {
//                 if (err) throw err;
//                 console.log('File Created! and Written!');
//             });
//     });

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
});