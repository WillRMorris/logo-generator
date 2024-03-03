

//obj to hold all questions
const questions = {
    fileName: 
    `
    please input file name:
    NOTE: .svg will automatically be added to the name
    so do not include it
    `,
    textInput: 
    `
    please input the text you want in the center of the logo:
    (three characters max)
    `,
    textColor: 
    `
    please intput a color for your text. It can be
    either a generic color such as 'red' or a 
    hexidecimal color code including the # :
    `,
    shape: 
    `
    please input a shape
    currently supported shapes: Triangle, Rectangle (Square), and Circle :
    `,
    shapeColor: 
    `
    please intput a color for your shape. It can be
    either a generic color such as 'red' or a 
    hexidecimal color code including the # :
    `,
    border: 
    `
    do you want a border? 
    input: 'yes' or 'no' :
    `,

}
//checks and sets borderBool using border, which holds the input
function getBoolBorder (border) {
    if (border === 'yes' || border === 'Yes'){
        return true;
    } else{
        return false;
    }
}
module.exports ={
    questions,
    getBoolBorder
}
