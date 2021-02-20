// Grabs Employee and gets Engineer specific info
const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    // github username
    getGithub() {
        return this.github
    }
    // assign role to Engineer
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer