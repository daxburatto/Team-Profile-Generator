const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const employees = []
const { writeHTML, writeFile, css} = require('./src/writeHTML')

// prompt for manager's information
const teamManager = () => {  
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager's Name",
            validate: function (answer) {  
                if (answer.length < 1) {
                    return console.log("Please enter Manager's name")
                } return true
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Manager's ID number",
            validate: function (answer) {  
                if (answer.length < 1) {
                    return console.log("Please enter Manager's ID number")
                } return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Manager's Email",
            validate: function (answer) {  
                if (answer.length < 1) {
                    return console.log("Please enter Manager's Email")
                } return true
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Managers Office Number"
        }
    ])
    // push data to Manager.js and run newEmployee()
    .then(function (data) {  
        employees.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        newEmployee()
    })
}

// prompts for Intern's and Engineer's information
const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee Id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email'
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter Engineer's GitHub Profile Link",
            when: function ({role}) {  
                if (role === `Engineer`) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's School",
            when: function ({role}) {  
                if (role === `Intern`) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to enter another employee?",
            default: false
        }
    ])
    // switch case to push Engineer/Intern information
    .then(function(data){
        switch (data.role) {
            case 'Engineer':
                employees.push(new Engineer(data.name, data.id, data.email, data.github))
                break;
            case 'Intern':
                employees.push(new Intern(data.name, data.id, data.email, data.school))
                break;
        }

        if (data.confirmAddEmployee) {
            newEmployee()
        } else {
            // console logs info and writes html and css files located in dist/
            console.log(employees)
            writeFile('./dist/index.html', writeHTML(employees))
            writeFile('./dist/style.css', css)
        }
    })
    .then(err => {
        console.log(err)
    })
}

// take employees data and push to html
teamManager()