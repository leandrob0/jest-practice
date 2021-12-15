const reverseString = require('../code/reverse-string')

test('reverse string', () => {
    expect(reverseString("Hola, como estas")).toBe("satse omoc ,aloH")
    expect(reverseString("chau")).toBe("uahc")
})