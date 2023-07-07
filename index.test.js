const getRandomNumbers = require('./index')

test("it should return an integer" , () => {
    const number  = getRandomNumbers();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
})