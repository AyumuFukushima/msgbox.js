const sample = require('../src/sample');

test('sample', () => {
    expect(sample(3, 2)).toBe(5);
});