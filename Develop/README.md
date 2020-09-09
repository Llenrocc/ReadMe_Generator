# ReadMe Generator



## Description

This ReadMe Generator is a quick and simple way to create a ReadMe for your projects in Github Repo. The readme includes purpose, how to use it, installation instructions,
and how to make contributions. This application runs with node js.

****

## Installation

These are the steps required to generate your own ReadMe:

* First, run npm init
* Run npm install
* npm install inquirer
* npm install axios

****

## Usage

Example of usage.

![Animated GIF-downsized](https://user-images.githubusercontent.com/62081345/92546790-69bc1d80-f221-11ea-9489-c98114bff1dc.gif) * ![Animated GIF-downsized_large](https://user-images.githubusercontent.com/62081345/92546851-8eb09080-f221-11ea-94be-626847fce7c4.gif)

Open up the terminal inside your VS code, type in node index.js. This will then trigger the 
inquirer package which will prompt you in the command line with questions regarding your 
Github project. 

The application then uses axios to fetch Github profile from the Github API. Once this is done,
generate markdown will create a table of contents for the readme based on your answers to the
questions. 

### Problem Solving

This application utilizes inquirer and axios packages to generate a readme quickly for your Github
profile. This will save time if you have a lot of projects on the go. 
Javascript and node.js were used to create this project. 
