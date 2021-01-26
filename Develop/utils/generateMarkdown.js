

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Questions](#Questions)
  * [License](#License)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
  ## License
  ${data.license}

  ## Questions
  Contact Information:
  
  Github: [${data.username}](https://github.com/${data.username}/${data.title})
  
  Email: ${data.email}
  
  
  
  `;

}

module.exports = generateMarkdown;
