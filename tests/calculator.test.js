const calculator = require('../code/calculator')

test('calculate done', () => {
    expect(calculator.add(2,3)).toBe(5)
    expect(calculator.multiply(2,3)).toBe(6)
    expect(calculator.divide(9,3)).toBe(3)
    expect(calculator.subtract(2,1)).toBe(1)
})