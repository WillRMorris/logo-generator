const fs = require("fs");

function getSVGText(text, color, shape) {

    switch (shape) {
        case `triangle`:
        case `Triangle`:
            return `
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
            `;

        case `rectangle`:
        case `Rectangle`:
        case `square`:
        case `Square`:
        case `circle`:
        case `Circle`:
            return `
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
            `;
        default:
            return `
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
            `;
    }
}

//outputs actual format for an svg file
function ToSVGFormat(shapeLine, textLine) {
    return `
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shapeLine}
        ${textLine}
    </svg>
    `
}

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
    writeToFile,
    getSVGText,
    ToSVGFormat,
}