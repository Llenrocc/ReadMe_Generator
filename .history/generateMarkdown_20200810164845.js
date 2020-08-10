//function to generate markdown for README
function generateMarkdown(response) {
    return `

    # ${response.Title}



    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Test](#test)
    * [Questions](#questions)
    
    ## Description
    ${response.Description}

    ## Installation
    ${response.Install}

    ## Usage
    ${response.Usage}

    ## License
    ${response.License}
    
    ## Contributors
    ${response.Contributors}

    ## Test
    ${response.Test}

    ## Questions
      If you want to contact me:

      Github: [${response.Github}]("https://github.com/Llenrocc")

      Email: [${response.Email}]("https://github.com/Llenrocc")
  `;
  }
 
  module.exports = generateMarkdown;
  