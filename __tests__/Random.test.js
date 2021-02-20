const { test, expect } = require('@jest/globals')
const checkIfEqual = require('../lib/Random')

test('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(10,10)).toBe(true)
})