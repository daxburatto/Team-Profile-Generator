const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('Creates new Manager', async () => {
    const manager = new Manager('Marcus', 34567, 'marcus@test.com', '01')

    expect(manager.getName()).toEqual(manager.name)
    expect(manager.getId()).toEqual(manager.id)
    expect(manager.getEmail()).toEqual(manager.email)
    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber)
    expect(manager.getRole()).toEqual('Manager')
})