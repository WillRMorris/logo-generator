//file imports
const ask = require('./libs/ask');
const shapes = require('./libs/shapes');
const writer = require('./libs/write');
const questions = require('./libs/questions');




async function init() {
    //gets user input and stores it in obj
    let obj = await ask(questions.questions);
    //gets bool based off of user input
    let border = questions.getBoolBorder(obj.border);
    //gets the shape user inputed including the shape.line value
    let shape = shapes(obj, border);
    //takes the text values from the user and makes the text line for the svg
    let textLine = writer.getSVGText(obj.textInput,obj.textColor);
    //combines the shapeline and text line in proper svg format
    let data = writer.ToSVGFormat(shape.line, textLine);
    //creates svg file
    writer.writeToFile(`${obj.fileName}.svg`, data);
}

init();