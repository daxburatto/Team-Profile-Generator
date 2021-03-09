const { objectExpression } = require('@babel/types')
const fs = require('fs')

// writes <head>, <body>, and includes array function for employee variables
function writeHTML(array) {  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="./dist/style.css">
    </head>

    <body>
        <header>
            <h1>
                Team Profile 
            </h1>
        </header>

        <main>
            <div class="main">
                ${writeEmployees(array)}
            </div>
        </main>
    </body>
    `
}

// writes employees with switch case for manager, engineer, or intern
function writeEmployees(array) {  
    return array.map(object=>{
        const {name, id, email, role, officeNumber, github, school} = object

        // roleTag is icon for employee
        let roleInfo
        let icon
        switch (role) {
            case `Manager`:
                roleInfo = `<li>Office Number:<br> ${officeNumber}</li>`
                icon = `<i class="fas fa-user-tie"></i>`
                break
            case `Engineer`:
                roleInfo = `<li>Github:<br> <a href="https://github.com/${github}" target="_blank">${github}</a></li>`
                icon = `<i class="fas fa-wrench"></i>`
                break
            case `Intern`:
                roleInfo = `<li>School:<br> ${school}</li>`
                icon = `<i class="fas fa-users"></i>`
                break
        }
        return `
        <div class="employee">
            <div class="title">
                <h2>${name}</h2>
                <p>${role}${icon}</p>
            </div>
            <div class="info">
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email:<br> <a href="mailto:${email}" target="_blank">${email}</a></li>
                    ${roleInfo}
                </ul>
            </div>
        </div>
        `  
    }).join('')
}

function writeFile(destination, text){
    return new Promise((resolve, reject)=>{
        fs.writeFile(destination, text, err =>{
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok:true,
                message: `File '${destination.slice(7)}' Created!`
            })
        })
    })
}

const css = `
* {
    padding: 0;
    margin: 0;
    color: white;
    background-color: black;
    font-family: 'Courier New', Courier, monospace;
}
header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background-color: black;
}
.main{
    width: 95%;
    height: 85vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.employee {
    width: 15rem;
    margin: 10px;
}
.employee .title{
    background-color: black;
    padding: 7px;
    margin-bottom: 3px;
    text-align: center;
    border: 5px solid rgb(123, 69, 209);
}
.employee .title h2 {
    margin: 5px 0 15px 0;
}
.employee i {
    margin: 0 3px;
}
.employee .info ul li{
    padding: 20px;
    margin-bottom: 5px;
    color: lightgrey;
    list-style: none;
    border: 1px solid rgb(123, 69, 209);
}
.employee .info ul a {
    color: rgb(123, 69, 209);
}
`

module.exports = { writeHTML, writeFile, css }