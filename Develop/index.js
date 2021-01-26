// TODO: Include packages needed for this application
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
{
type: 'input',
message: 'What is the title of your project',
name: 'title',
},
{
type: 'input',
message: 'What is the description of your project',
name: 'description',
},
{
type: 'input',
message: 'What is the installation process',
name: 'installation',
},
{
type: 'input',
message: 'How do you use the application',
name: 'usage',
},
{
type: 'input',
message: 'Did anyone else contribute to this application',
name: 'contribution',
},
{
type: 'input',   
message: 'How do you test your application',
name: 'test',
},
{
type: 'input',
message: 'Do you have any questions ?',
name: 'questions',
},
{
type: 'list',
message: 'What license are you using',
name: 'license',
choices: ['MIT License', 'GVL GPL License', 'Apache License', 'No License']
},
{
type: 'input',
message: 'What is your github username',
name: 'username',
},
{
type: 'input',
message: 'What is your email address',
name: 'email',
},

])



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
