const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('Creates an Employee', async () => {
    const employee = new Employee("Henry", 12345, "Henry@test.com")

    expect(employee.getName()).toEqual(employee.name)
    expect(employee.getId()).toEqual(employee.id)
    expect(employee.getEmail()).toEqual(employee.email)
    expect(employee.getRole()).toEqual("Employee")
})

