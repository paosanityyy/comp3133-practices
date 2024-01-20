const fs = require('fs')

// Append to a file
async function addEmployee(eid, enm, salary) {
    const str = `${eid},${enm},${salary}\n`;
    try {
        await fs.appendFile('emp.csv', str, ()=> {flag: 'a+'})
        console.log('File appended!');
    } catch (error) {
        console.log(error);
    }
    
}

addEmployee(1, "Peter Parker", 100000);
addEmployee(2, "Bruce Wayne", 200000);

