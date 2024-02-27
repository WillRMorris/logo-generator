const fs = require("fs");


//does the actual file creation
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error printing file');
        }
        else {
            console.log(`file printed successfully`);
        }
    })
}


module.exports = {
    writeToFile
}