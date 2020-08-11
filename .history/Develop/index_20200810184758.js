// Code from develop folder
  // array of questions for user
const fs = require("fs");
const axios = require("axios");
const inquirer = require('inquirer');
const generateMarkdown = require("Develop/generateMarkdown.js");

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
      type: "input",
      message: "Are there any contributors?",
      name: "Contributors"
    },

    {
      type: "input",
      message: "How to test the app",
      name: "Test"
    },

    {
      type: "input",
      message: "Any Questions?",
      name: "Questions"
    },

    {
      type: "input",
      message: "What is your Github UserName?",
      name: "Github"
    },

    {
      type: "input",
      message: "What is your email?",
      name: "Email"
    },
  ];

  // Function to initialize the program  

  function init() {
    inquirer.prompt(questions).then((answers) => {
      const response = generateMarkdown(answers);
      console.log(answers);

      writeToFile("README.md", response);
    })
  }

  init();