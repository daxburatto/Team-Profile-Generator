class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.role = 'Employee'
    }

    // getName()
    getName() {
        return this.name
    }

    // getId
    getId() {
        return this.id
    }

    // getEmail
    getEmail() {
        return this.email
    }

    // getRole
    getRole() {
        return "Employee"
    }
}

module.exports = Employee