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
const axios = require("axios");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [

    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title"
    },

    {
      type: "input",
      message: "Please write a description of your project.",
      name: "Description"
    },

    {
      type:"input",
      message: "Please Fill out Table of Contents",
      name: "Table of Contents"
    },

    {
      type: "input",
      message: "Installation Instructions",
      name: "Install"
    },

    {
      type: "input",
      message: "Explain how to use the app",
      name: "Usage"
    },

    {
      type: "list",
      message: "Which license are you using?",
      name: "License",
      choices: [
        "MIT License",
        "GVL GPL License",
        "Apache License",
        "No License"
      ]
    },

    {
      
    }

    
    function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("README was created");
  });
}


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

    fs.appendFileSync("README.md", ("## Authors " + '\n' + response.authors) + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Contact Info" + '\n' + response.contact) + '\n', function(err) {
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
//init();
