function generateMarkdown(data) {
  return `

# ${data.name}
### Description
${data.description}
### Table of Contents
* [Installation](#Installation)
* License

### License
![badge](https://img.shields.io/badge/LICENSE-${data.license}-RED)

### Questions
message that says for question contact etc

![picture](${data.picture})
${data.email}







### Installation


### License
![badge](https://img.shields.io/badge/License-GPL-RED)

`;
}

module.exports = generateMarkdown;
