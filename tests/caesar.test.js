const cipher = require('../code/caesar')

test('encrypted', () => {
    expect(cipher('c', 13)).toBe('p')
    expect(cipher('defend the eaST wall of the castle', 1)).toBe('efgfoe uif fbTU xbmm pg uif dbtumf')
})