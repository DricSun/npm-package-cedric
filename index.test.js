const getFestivalsOccitanie = require('./index');

test("the array should not be empty", async() => {
    const festivals = await getFestivalsOccitanie();
    expect(festivals).not.toBeNull();
    expect(festivals).toBeInstanceOf(Array);
})