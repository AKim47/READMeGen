// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return `![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return `[${license}](https://choosealicense.com/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return `## License`
  }
}

function renderLicenseTOC(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return `* [License](#License)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description

  ${renderLicenseBadge(data.license)}

  ${data.desc}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution Guidelines](#Contribution_Guidelines)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ${renderLicenseTOC(data.license)}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions

  [Github Link]()

  Insert email here

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;
