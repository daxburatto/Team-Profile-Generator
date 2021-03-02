const { objectExpression } = require('@babel/types')
const fs = require('fs')

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

function writeEmployees(array) {  
    return array.map(object=>{
        const {name, id, email, role, officeNumber, github, school} = object

        let roleTag
        let icon
        switch (role) {
            case `Manager`:
                roleTag = `<li>Office Number:<br> ${officeNumber}</li>`
                icon = `<i class="fas fa-user-tie"></i>`
                break
            case `Engineer`:
                roleTag = `<li>Github: <a href="https://github.com/${github}" target="_blank">${github}</a></li>`
                icon = `<i class="fas fa-wrench"></i>`
                break
            case `Intern`:
                roleTag = `<li>School: ${school}</li>`
                icon = ``
                break
        }
        return `
        <div class="employee">
            <div class="title">
                <h2>${name}</h2>
                <p>${icon}${role}</p>
            </div>
            <div class="info">
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email: <a href="mailto:${email}" target="_blank">${email}</a></li>
                    ${roleTag}
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
    width: 14rem;
    box-shadow: 2px 2px 3px rgb(114, 113, 113);
    margin: 10px;
}
.employee .title{
    background-color: black;
    padding: 7px;
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
    padding: 15px;
    color: grey;
    list-style: none;
    border: 1px solid rgb(123, 69, 209);
}
.employee .info ul a {
    color: rgb(123, 69, 209);
}
`

module.exports = { writeHTML, writeFile, css }