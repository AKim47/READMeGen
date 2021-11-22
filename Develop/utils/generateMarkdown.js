// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.desc}

  ## Table of Contents

  * [Filler](#filler)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribute}

  ## License

  Insert license info here later

  ## Tests

  ${data.tests}

  ## Questions

  Insert link to Github Here

  Insert email here
  
`;
}

module.exports = generateMarkdown;
