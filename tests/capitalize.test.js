const capitalize = require('../code/capitalize');

test('capitalizes 1st letter', () => {
    expect(capitalize("callate la boca")).toBe("Callate la boca");
    expect(capitalize("hola")).not.toBeUndefined();
    expect(capitalize("")).not.toBe("");
})