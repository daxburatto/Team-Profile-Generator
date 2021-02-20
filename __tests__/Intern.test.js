const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('Creates a new Intern', async () => {
    const intern = new Intern('Dax', 45678, 'dax@test.com', 'UTA')

    expect(intern.getName()).toEqual(intern.name)
    expect(intern.getId()).toEqual(intern.id)
    expect(intern.getEmail()).toEqual(intern.email)
    expect(intern.getSchool()).toEqual(intern.school)
    expect(intern.getRole()).toEqual('Intern')
})