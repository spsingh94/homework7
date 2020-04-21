//require all of the modules
const fs = require("fs");
const inquirer = require("inquirer");
// const axios = require("axios");
const api = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown")

//prompt user to input username and questions about their project
inquirer
    .prompt([{
        type: "input",
        message: "What is your user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your projects name?",
        name: "name"
    },
    {
        type: "input",
        message: "Provide a description of your project",
        name: "description"
    }
])
    // console.log(answers.username);
    .then(answers => {
        const username = answers.username;
        // axios
        //     .get("https://api.github.com/users/" + username)
        api.getUser(username)    
        .then((res) => {
                // console.log(res);
                var userInfo = {
                    name: answers.name,
                    description: answers.description,
                    email: res.data.email,
                    picture: res.data.avatar_url
                }
                var data = generateMarkdown(userInfo);
                console.log(data);
                writeToFile("README.md", data);
            })
            .catch(error => {
                if (error) {
                    console.log("error", error);
                } else {
                    console.log("success");
                }
            })
    });

    // .catch(error => {
    //     if (error) {
    //         console.log("error")
    //     } else {
    //         console.log("success")
    //     }
    // });
// axios
// .get(`https://api.github.com/users/${username}/repos?per_page=100`)
// .then((res) => {
//     console.log(res);
// }) 
// .catch(error =>{
//     if(error){
//         console.log("error");
//     } else {
//         console.log("success");
//     }


// fs.readFile(function(element){
//     console.log(element.data)
// });


// const questions = [
//     prompt("Please enter your username"),
//     prompt("Please enter your project title"),
//     prompt("Please enter a small description about your project"),
//     prompt("Please enter questions you may have about your project"),
// ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(error){
        if(error){
            console.log("error", error)
        } else {
            console.log("Successfully written data")
        }
    })
}

// function init() {

// }

// init();
