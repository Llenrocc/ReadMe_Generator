// var inquirer = require('inquirer');
// inquirer
  // .prompt([
    /* Pass your questions in here */
  //])
  //.then(answers => {
    // Use user feedback for... whatever!!
  //})
  //.catch(error => {
    //if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //} else {
      // Something else when wrong
    //}
  //}); 

  
  // Code from develop folder
  // array of questions for user
const fs = require("fs");
const inquirer = require('inquirer');

const questions = [

    {
      type: "input",
      name: "badge",
      message: "Input badge code."
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project."
    },
    {
      type: "input",
      name: "table of Contents",
      Message: "Write a table of contents separated by commas."
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instructions."
    },
    {
      type: "input",
      name: "usage",
      message: "Describe Usage."
    },
    {
      type: "checkbox",
      message: "Choose a license.",
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
      name: "Authors",
      message: "Who is/are the author(s)?"
    },
    
    {
      type: "input",
      name: "question1",
      message: "Enter Email.",
    },  
];

console.clear();

inquirer
    .prompt(questions).then(response => {
      fs.appendFileSync("README.md", ("# " + response.title) + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      })
    });

    // appending to readme, response for badge. Function if error, return error in console. If not, success!

    fs.appendFileSync("README.md", ('\n' + response.badge) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Table of Contents" + "\n" + '-' + response.tableofcontents.split(", ").
    join('\n' + '- ')) + '\n', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Installation Instructions" + '\n' + response.installation) + 
    '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Usage" + '\n' + response.usage) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!")
    });

    fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success");
    });

    fs.appendFileSync("README.md", ("## How to Contribute" + '\n' + response.contributing) +
    '\n', function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## How to Run Tests" + '\n' + response.tests) + '\n',
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log
    });

    fs.appendFileSync("README.md", ('\n' + response.question2) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success");
    });

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
init();
