const fs = require('fs');

// r - Open file for reading. An exception occurs if the file does not exist.
// w - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// a - Open file for appending. The file is created if it does not exist.
// r+ - Open file for reading and writing. An exception occurs if the file does not exist.
// w+ - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

fs.open('out_data.txt', 'a+', (err, fd) => {    
    if (err) {
        console.log(err);
        throw err;
    }

//     // Read the file
//     fs.read(fd, (err, data, bytesRead) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }

//         console.log(`Read ${bytesRead} bytes from file`);
//         console.log(data.toString());
//     })

    const data_to_write = Buffer.from('Hello World again!')
    fs.write(fd, data_to_write, (err, written, string) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(`Wrote ${written} bytes to file`);
        console.log(string);
    })

    const buffer = Buffer.alloc(5);
    fs.read(fd, buffer, 0, buffer.length, 6, (err, bytesRead) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(`Read ${bytesRead} bytes from file`);
        console.log(buffer.toString());
    })


});

