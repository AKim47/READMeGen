// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "Write down a description of your project", "What are the installation insctructions?", "What are the usage information?", "What are the contribution guidelines?", "What are the test instructions?", "What licenses did you use?", "Enter a GitHub Username", "Enter an email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });

        });
    });
}

const promptReadMe = readMeData => {
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
            name: 'test',
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
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['none', 'apache-2.0', 'isc', 'mit', 'gpl-3.0']
        },
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
    ])
    .then(readMeData => {return readMeData});
};

// TODO: Create a function to initialize app
function init() {
    promptReadMe()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then((pageData) => {
        return writeToFile('ReadMeGen.md', pageData);
    })
    ;

}

// Function call to initialize app
init()
