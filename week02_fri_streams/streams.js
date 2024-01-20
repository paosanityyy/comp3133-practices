const fs = require('fs');

const readStream = fs.createReadStream('data.txt', 'utf8');
const writeStream = fs.createWriteStream('out_stream.txt');

// Called when the stream has data to read
readStream.on('data', (chunk) => {
    console.log('Reading data...');
    // writeStream.write(chunk);
    console.log(chunk);
});

// Called when there is an error reading the stream
readStream.on('error', (err) => {
    console.log(`Error reading stream: ${err}`);
});

// Called when the end of the stream is reached
readStream.on('end', () => {
    console.log('Finished reading data');
    writeStream.end();
});

writeStream.write('1 - Hello World!');
writeStream.write('2 - Another line');
writeStream.write('3 - Another line');
writeStream.end();
// writeStream.write('4 - Another line');
 // Called error writing the stream the write stream is closed
writeStream.on('error', (err) => {
    console.log(err);
});

// Called when the write stream is closed
writeStream.on('close', () => {
    console.log('Finished writing data');
});