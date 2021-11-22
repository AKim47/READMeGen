// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "Write down a description of your project", "What are the installation insctructions?", "What are the usage information?", "What are the contribution guidelines?", "What are the test instructions?", "What licenses did you use?", "Enter a GitHub Username", "Enter an email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const promptReadMe = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: titleInput => {
                    if(titleInput) {
                        return true;
                    } else {
                        console.log('Please enter your project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'desc',
                message: questions[1],
                validate: descInput => {
                    if(descInput) {
                        return true;
                    } else {
                        console.log('Please enter your project description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: questions[2],
                validate: installInput => {
                    if(installInput) {
                        return true;
                    } else {
                        console.log('Please enter your installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
                validate: usageInput => {
                    if(usageInput) {
                        return true;
                    } else {
                        console.log('Please enter your usage information!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[4],
                validate: contributeInput => {
                    if(contributeInput) {
                        return true;
                    } else {
                        console.log('Please enter your contribution guidelines!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: questions[5],
                validate: testInput => {
                    if(testInput) {
                        return true;
                    } else {
                        console.log('Please enter your test instructions!');
                        return false;
                    }
                }
            },
            // multiple choice input for licenses
            {
                type: 'input',
                name: 'github',
                message: questions[7],
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your Username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            }
        ]);
    };
    promptReadMe();
}

// Function call to initialize app
init();
