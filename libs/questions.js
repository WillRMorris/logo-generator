const inquirer = require('inquirer');


let questionsAsked = 0;
function askUser(question){
    return new Promise ((resolve) =>{

        inquirer
        .prompt([
          {
            type: 'input',
            message: `
            ${question}
            `,
            name: `q${questionsAsked}`
          },
        ])
        .then((response) => {
          questionsAsked++;
          resolve(response);
        })
        
      })
}

function askQuestions (obj){
  return new Promise (async (answer) =>{

    inquirer
    .prompt([
      {
        type: 'input',
        message: `
        hello! welcome to Simple Logo Generator. we're going
        to ask you some questions and you're responses will help
        us to generate a unique logo! 
            press enter to continue
        `,
        name: 'welcome',
      },
    ])
    .then(async function (response) {
        for( let response in obj){
          let input = await askUser(obj[response]);
          array = Object.entries(input)
          obj[response] = array[0][1];
          console.log(obj[response]);
        }
        answer(obj);
      }
      );
    })
    }
    module.exports = askQuestions;