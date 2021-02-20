const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('Creates an Engineer', async () => {
    const engineer = new Engineer('Ben', 23456, "Ben@test.com", "bengithub")

    expect(engineer.getName()).toEqual(engineer.name)
    expect(engineer.getId()).toEqual(engineer.id)
    expect(engineer.getEmail()).toEqual(engineer.email)
    expect(engineer.getGithub()).toEqual(engineer.github)
    expect(engineer.getRole()).toEqual('Engineer')
})