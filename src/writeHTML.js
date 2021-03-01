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
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1>
                Team Profile 
            </h1>
        </header>

        <main>
            <div>
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
                roleTag = ``
                icon = ``
                break
            case `Engineer`:
                roleTag = ``
                icon = ``
                break
            case `Intern`:
                roleTag = ``
                icon = ``
                break
        }
        return `
        <div class="employee"
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