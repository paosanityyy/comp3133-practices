const fs = require('fs')

// Append to a file
async function appendData(str) {
    try {
        await fs.appendFile('out_data.txt', str, ()=> {flag: 'a+'})
        console.log('File appended!');
    } catch (error) {
        console.log(error);
    }
    
}
appendData("1 - George Brown College\n")
appendData("2 - George Brown College\n")
appendData("3 - George Brown College\n")


// fs.appendFile('out_data.txt', str, (err) => {
//     if (err) throw err
//     console.log('File appended!')
// })

// fs.appendFileSync('out_data.txt', "Paosanity")