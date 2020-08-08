var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


  
  // Code from develop folder
  // array of questions for user
const questions = [
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "Description",
      message: "Write a description of your project."
    },
    {
      type: "input",
      name: "Table of Contents",
      Message: "Write a table of contents separated by commas."
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation Instructions."
    },
    {
      type: "input",
      name: "Usage",
      message: "Describe Usage."
    },
    {
      type: "checkbox",
      message: "Choose a license",
      name: "License",
      choices: [
          "MIT License",
          "Apache License",
          "GPL License",
          "Public Domain (Unlicensed)"
      ]
    },
    {
      type: "input",
      name: "Contributing",
      message: "What are the rules for contributing?"
    },
    {
      type: "input",
      name: "Tests",
      message: "Run tests here."
    },
    {
      type: "input",
      name: "Questions",

    }  
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
