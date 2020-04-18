//require all of the modules
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

//prompt user to input username and questions about their project
// inquirer
//     .prompt([
//         "Enter username",
//         "Enter email address",
//     ])
//     .then((answers) => {
//         console.log(answers);
//     })
//     .catch(error => {
//         if (error) {
//             console.log("error")
//         } else {
//             console.log("success")
//         }
//     });

// const username = 

axios
.get(`https://api.github.com/users/spsingh94/repos?per_page=100`)
.then((res) => {
    console.log(res);
}) 
.catch(error =>{
    if(error){
        console.log("error");
    } else {
        console.log("success");
    }
});

// fs.readFile(function(element){
//     console.log(element.data)
// });


// const questions = [
//     prompt("Please enter your username"),
//     prompt("Please enter your project title"),
//     prompt("Please enter a small description about your project"),
//     prompt("Please enter questions you may have about your project"),
// ];

// function writeToFile(README.md, data) {
// }

// function init() {

// }

// init();
