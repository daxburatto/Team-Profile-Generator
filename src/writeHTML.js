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
        const {name, id, email, officeNumber, github, school} = object

        return `
        <div class="employee"
        `
    })
}